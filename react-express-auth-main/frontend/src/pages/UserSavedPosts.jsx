import React, { useState, useEffect, useContext } from "react";
import { getUserSavedPosts } from "../adapters/savedPost-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { NavLink } from "react-router-dom";


export default function UserProfileSavedPosts(){
    const { currentUser } = useContext(CurrentUserContext);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState({});

    useEffect(() => {
        //fetches user's saved posts
        const fetchSavedPosts = async () => {
          if (currentUser) {
            const [data, error] = await getUserSavedPosts(currentUser.id);
            data.forEach((post) => {
              setSavedPosts((prevState) => ({ ...prevState, [post.postId]: true }));
            });
          }
        };
    
        fetchSavedPosts();
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
      );
    }
    