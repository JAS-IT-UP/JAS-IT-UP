import React, { useState, useEffect, useContext } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import {
  createSavedPost,
  getUserSavedPosts,
  deleteSavedPost,
} from "../adapters/savedPost-adapter";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import Card from "react-bootstrap/Card";
import Hamburger from "hamburger-react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import "./Explore.css";
import "./User.css";

export default function ExplorePage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState({});
  const [isOpen, setOpen] = useState({});
  const [isSaved, setSave] = useState(false);

  useEffect(() => {
    //fetches all posts
    const loadPosts = async () => {
      try {
        const [postCards, error] = await getAllPosts();
        if (error) {
          setErrorText(error.message);
        } else {
          postCards.forEach((card) => {
            setOpen((prevState) => ({ ...prevState, [card.id]: false })); // setting state here
          });

          setPosts(postCards);
        }
      } catch (error) {
        setErrorText("Error fetching posts");
      }
    };

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
    loadPosts();
  }, [currentUser]);

  const handleSaveToggle = async (postId) => {
    try {
      if (savedPosts[postId]) {
        await deleteSavedPost(postId);

        setSavedPosts({ ...savedPosts, postId: false });
      } else {
        await createSavedPost(postId);
        setSavedPosts({ ...savedPosts, [postId]: true });
      }
    } catch (error) {
      console.error("Error toggling save:", error);
    }
  };

  return (
    <>
      <main id="explore-main">
        <section id="posts-container">
          {posts &&
            posts.map((post) => {
              return (
                <>
                  <div className="user-posts-cards">
                    {isOpen[post.id] ? <>
                      <Card
                        key={post.id}
                        style={{ width: "18rem" }}
                        id="explore-postcard"
                      >

                        <Card.Body id="postcard-text">
                          <Card.Text id="explore-post-heading" style={{ fontFamily: "Aleo", fontWeight: "bold", fontSize: "25px" }}>
                            Materials:
                          </Card.Text>
                          <Card.Text id="explore-post-details" >
                            {post.material_name}
                          </Card.Text>
                          <Card.Text style={{ fontFamily: "Aleo", fontWeight: "bold", fontSize: "25px" }} id="explore-post-heading">
                            The Revamp:
                          </Card.Text>
                          <Card.Text id="explore-post-details">
                            {post.project_description}
                          </Card.Text>
                        </Card.Body>

                      </Card>
                    </> : <>     <Card
                      key={post.id}
                      style={{ width: "18rem" }}
                      id="explore-postcard"
                    >
                      <Card.Img
                        variant="top"
                        src={post.post_picture}
                        roundedCircle
                        id="explore-postcard-post-pic"
                      />
                      <Card.ImgOverlay>
                        <Card.Img
                          variant="top"
                          src={post.profile_picture}
                          id="explore-postcard-profile-pic"
                        />
                      </Card.ImgOverlay>

                    </Card></>}


                    <section className="Post-Interactions">
                      <Hamburger
                        toggled={isOpen[post.id]}
                        toggle={() =>
                          setOpen({ ...isOpen, [post.id]: !isOpen[post.id] })
                        }
                      />
                      <div id="explore-save-icon">
                        {savedPosts[post.id] ? (
                          <FaBookmark className="bookmark"
                            onClick={() => {
                              setSavedPosts((prevState) => ({
                                ...prevState,
                                [post.id]: !savedPosts[post.id],
                              }));
                              handleSaveToggle(post.id);
                            }}
                          ></FaBookmark>
                        ) : (
                          <FaRegBookmark className="bookmark"
                            onClick={() => {
                              setSavedPosts((prevState) => ({
                                ...prevState,
                                [post.id]: !savedPosts[post.id],
                              }));
                              handleSaveToggle(post.id);
                            }}
                          ></FaRegBookmark>
                        )}
                      </div>
                    </section>
                  </div>
                </>
              );
            })}
        </section>
      </main>
    </>
  );
}
