import React, { useState, useEffect, useContext } from "react";
import { getUserSavedPostInfo } from "../adapters/savedPost-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Hamburger from "hamburger-react";
export default function UserProfileSavedPosts() {
  const { currentUser } = useContext(CurrentUserContext);
  const [savedPosts, setSavedPosts] = useState([]);
  const [isOpen, setOpen] = useState({});

  useEffect(() => {
    //fetches user's saved posts
    const fetchSavedPosts = async () => {
      if (currentUser) {
        const [data, error] = await getUserSavedPostInfo(currentUser.id);
        console.log(data, "this is my fetch");
        setSavedPosts([...data]);
        // data.forEach((post) => {
        //   setSavedPosts((prevState) => ({ ...prevState, [post.postId]: true }));
        // });
      }
    };

    fetchSavedPosts();
  }, [currentUser]);

  //   const createPostButton = (
  //     <button id="create" onClick={() => navigate("/create-post")}>
  //       +
  //     </button>
  //   );

  //   const handleDelete = async (postId) => {
  //     const postsArray = posts.userPost.filter((post) => post.id !== postId);
  //     const [post, error] = await deletePost(postId);
  //     if (error) return setErrorText(error.message);
  //     setPosts(() => ({ userPost: postsArray }));
  //   };

  //   if (!userProfile && !errorText) return null;
  //   if (errorText) return <p>{errorText}</p>;

  const profileUsername = currentUser ? currentUser.username : null;

  return (
    <div id="user-page-background">
      {/* <div id="user-picture">
        {createPostButton}
        <div id="picture">
          <img
            id="user-profile-picture"
            src={userProfile.profilePicture}
            alt=""
          />
        </div>
      </div> */}

      <section id="user-posts-container">
        {savedPosts.length &&
          savedPosts.map((savedPost) => {
            return (
              <>
                <div id="user-posts-cards">
                  <Card key={savedPost.id} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={savedPost.post_picture} />
                    <Card.ImgOverlay>
                      <Card.Img
                        variant="top"
                        src={savedPost.profile_picture}
                        id="explore-postcard-profile-pic"
                      />
                    </Card.ImgOverlay>

                    {isOpen[savedPost.id] && (
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
                          {savedPost.material_name}
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
                          {savedPost.project_description}
                        </Card.Text>
                      </Card.Body>
                    )}
                  </Card>
                  <section className="user-post-interactions">
                    <Hamburger
                      toggled={isOpen[savedPost.id]}
                      toggle={() =>
                        setOpen({
                          ...isOpen,
                          [savedPost.id]: !isOpen[savedPost.id],
                        })
                      }
                    />
                    <div id="delete-container">
                      <button
                        type="button"
                        id="delete-button"
                        onClick={() => handleDelete(savedPost.id)}
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
  );
}
