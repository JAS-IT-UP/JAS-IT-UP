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

export default function ExplorePage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [isSaved, setSave] = useState(false);
  let boo = true;

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

//fetches User's Saved Posts
    const fetchSavedPosts = async () => {
      if (currentUser) {
        const [data, error] = await getUserSavedPosts(currentUser.id);
        data.forEach((post) => {
          console.log(post.postId);
          setSavedPosts((prevState) => ({ ...prevState, [post.postId]: true }));
        });
      }
    };

    fetchSavedPosts();
    loadPosts();
  }, [currentUser]);


  // const isPostSaved = (postId) => {
  //   for (let i = 0; i < savedPosts.length; i++) {
  //     if (savedPosts[i].postId === postId) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // const handleSaveToggle = async (postId) => {
  //   try {
  //     if (isPostSaved(postId)) {
  //       await deleteSavedPost(currentUser.id, postId);
  //       setSavedPosts(
  //         savedPosts.filter((savedPost) => savedPost.postId !== postId)
  //       );
  //     } else {
  //       await createSavedPost(currentUser.id, postId);
  //       setSavedPosts([...savedPosts, { id: postId }]);
  //     }
  //   } catch (error) {
  //     console.error("Error toggling save:", error);
  //     // Handle error here
  //   }
  // };
  // const nonCurrUserPosts = posts.filter(post => post.userId !== currentUser.id);

  return (
    <>
      <main id="explore-main">
        <div id="left-wallpaper-container">
          {/* <img
            src="/images/explore-left-wallpaper.svg"
            alt="Left Wallpaper"
            class="left-wallpaper"
          /> */}
        </div>
        <div id="main-content" className="scrollable-content">
          {}

          <section id="posts-container">
            {posts &&
              posts.map((post) => {
                return (
                  <Card key={post.id} style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={post.post_picture} />
                    <Card.ImgOverlay>
                      <Card.Img variant="top" src={post.profile_picture} />
                    </Card.ImgOverlay>
                    <section class="Post-Interactions">
                      <Hamburger
                        toggled={isOpen[post.id]}
                        toggle={() =>
                          setOpen({ ...isOpen, [post.id]: !isOpen[post.id] })
                        }
                      />
                      {savedPosts[post.id] ? (
                        <FaBookmark
                          onClick={() => {
                            setSavedPost((prevState) => ({
                              ...prevState,
                              [post.id]: !savedPosts[post.id],
                            }));
                            handleSaveToggle(post.id);
                          }}
                        />
                      ) : (
                        <FaRegBookmark
                          onClick={() => {
                            setSavedPost((prevState) => ({
                              ...prevState,
                              [post.postId]: !savedPosts[post.id],
                            }));
                            handleSaveToggle(post.id);
                          }}
                        />
                      )}
                    </section>
                    {isOpen && (
                      <Card.Body>
                        <Card.Text>
                          <h3 id="explore-post-heading">Materials</h3>
                          {post.material_name}
                        </Card.Text>
                        <Card.Text>
                          <h3 id="explore-post-heading">The Revamp</h3>
                          {post.project_description}
                        </Card.Text>
                      </Card.Body>
                    )}
                  </Card>
                );
              })}
          </section>
        </div>
        <div id="right-wallpaper-container">
          {/* <img
            src="/images/explore-left-wallpaper.svg"
            alt="Right Wallpaper"
            class="right-wallpaper"
          /> */}
        </div>
      </main>
    </>
  );
}
