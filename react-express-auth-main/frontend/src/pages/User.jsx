import { useContext, useEffect, useState } from "react";
import "./User.css";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getUserPosts } from "../adapters/post-adapter";
import { deletePost } from "../adapters/post-adapter";
// import UpdateUsernameForm from "../components/UpdateUsernameForm";
import Card from "react-bootstrap/Card";
import Hamburger from "hamburger-react";
import { getUserSavedPosts } from "../adapters/savedPost-adapter";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  const [posts, setPosts] = useState({ userPost: [] });
  const [isOpen, setOpen] = useState({});

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    // const fetchSavedPosts = async () => {
    //   if (currentUser) {
    //     const [data, error] = await getUserSavedPosts(currentUser.id);
    //     data.forEach((post) => {
    //       setSave((prevState) => ({ ...prevState, [post.postId]: true }));
    //     });
    //   }
    // }

    loadUser();
    // fetchSavedPosts();
  }, [currentUser]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const [userPosts, postsError] = await getUserPosts(id);
        if (postsError) {
          setErrorText(postsError.message);
        } else {
          console.log(userPosts, "this is userPosts");
          setPosts((prevState) => ({ ...prevState, userPost: userPosts }));
        }
      } catch (error) {
        setErrorText("Error fetching user posts");
      }
    };

    fetchUserPosts();
  }, [currentUser]);

  const createPostButton = (
    <button id="create" onClick={() => navigate("/create-post")}>
      +
    </button>
  );

  const handleDelete = async (postId) => {
    const postsArray = posts.userPost.filter((post) => post.id !== postId);
    const [post, error] = await deletePost(postId);
    if (error) return setErrorText(error.message);
    setPosts(() => ({ userPost: postsArray }));
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;

  return (
    
    <div id="user-page-background">
      <div id="template-background">
      <div id="user-picture">
        {createPostButton}
        <div id="picture">
          <img
            id="user-profile-picture"
            src={userProfile.profilePicture}
            alt=""
          />
        </div>
      </div>

      <section id="user-posts-container">
        {posts.userPost.length &&
          posts.userPost.map((post) => {
            return (
              <>
                <div id="user-posts-cards">
                  <Card key={post.id} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={post.postPicture} />
                    <Card.ImgOverlay>
                      <Card.Img variant="top" src={post.profilePicture} />
                    </Card.ImgOverlay>

                    {isOpen[post.id] && (
                      <Card.Body>
                        <Card.Text
                          style={{
                            fontFamily: "Aleo",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          Materials:
                        </Card.Text>
                        <Card.Text style={{ fontFamily: "Michroma" }}>
                          {post.materialName}
                        </Card.Text>
                        <Card.Text
                          style={{
                            fontFamily: "Aleo",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          The Revamp:
                        </Card.Text>
                        <Card.Text style={{ fontFamily: "Michroma" }}>
                          {post.projectDescription}
                        </Card.Text>
                      </Card.Body>
                    )}
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                  </Card>
                  <section className="user-post-interactions">
                    <Hamburger
                      toggled={isOpen[post.id]}
                      toggle={() =>
                        setOpen({ ...isOpen, [post.id]: !isOpen[post.id] })
                      }
                    />
                    <div id="delete-container">
                      <button
                        type="button"
                        id="delete-button"
                        onClick={() => handleDelete(post.id)}
                      >
                        DELETE
                      </button>
                    </div>
                  </section>
                </div>
              </>
            );
          })}
      </section>
      <p id="update">
        Your username is {profileUsername}. You can update{" "}
        <NavLink to="/update-username">here</NavLink>!
      </p>
    </div>
      </div>
  );
}
