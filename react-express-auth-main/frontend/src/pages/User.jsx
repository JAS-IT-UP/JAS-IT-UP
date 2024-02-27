import { useContext, useEffect, useState } from "react";
import "./User.css"
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getUserPosts } from "../adapters/post-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import { deletePost } from "../adapters/post-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import Card from 'react-bootstrap/Card';
import Hamburger from "hamburger-react";


export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  const [posts, setPosts] = useState({userPost: []});
  // let boo = true;
  const [isOpen, setOpen] = useState(false);
  

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const [userPosts, postsError] = await getUserPosts(id);
        if (postsError) {
          setErrorText(postsError.message);
        } else {
          console.log(userPosts, "this is userPosts");
          setPosts(prevState => ({ ...prevState, userPost: userPosts }));
        }
      } catch (error) {
        setErrorText("Error fetching user posts");
      }
    };

    fetchUserPosts();
  }, [id]);

  const createPostButton = (
    <button id="create" onClick={() => navigate('/create-post')}>+</button>
  );

  const handleDelete = async (postId) => {
    const postsArray = posts.userPost.filter(post => post.id === postId);
    const [post, error] = await deletePost(postId);
    if (error) return setErrorText(error.message);
    console.log(postsArray, "this is the posts array");
    setPosts(prevState => ({ ...prevState, userPost: postsArray }));
    // setPosts(() =>  {userPost: postsArray});
}
  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return (
    <>
      <div id="user-picture">
        {createPostButton}
        <div id="picture">
          <img id="user-profile-picture" src={userProfile.profilePicture} alt="" />
        </div>
      </div>

      {isCurrentUserProfile && (
        <button onClick={handleLogout}>Log Out</button>
      )}

      {isCurrentUserProfile && (
        <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}

      <section id="posts-container">
        {posts.userPost.length && posts.userPost.map((post) => {
          return (
            <Card key={post.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={post.post_picture} />
            <Card.ImgOverlay>
              <Card.Img variant="top" src={post.profile_picture} />
            </Card.ImgOverlay>
            <section class="postCard-info">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </section>
            {isOpen && (
              <Card.Body>
                <Card.Text>
                  <h3>Materials</h3>
                  {post.material_name}
                </Card.Text>
                <Card.Text>
                  <h3>The Revamp</h3>
                  {post.project_description}
                </Card.Text>
              </Card.Body>
            )}
            <button type="button" id="delete-button" onClick={() => handleDelete(post.id)}>DELETE</button>
          </Card>
        )})}
      </section>
    </>
  );
}