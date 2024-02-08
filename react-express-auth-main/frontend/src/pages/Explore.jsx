import React, { useState, useEffect, useContext } from "react";
import { getAllPosts } from '../adapters/post-adapter';
import { useNavigate, Navigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";

export default function ExplorePage() {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  if (!currentUser) return <Navigate to="/" />;

  useEffect(() => {
    async function fetchPosts() {
      try {
        const [responseData, error] = await getAllPosts('/api/posts', basicFetchOptions);
        if (error) {
          throw new Error(`Error fetching posts: ${error.message}`);
        }
        setPosts(responseData); 
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  const toggleSavePost = (postId) => {
    if (savedPosts.includes(postId)) {
      setSavedPosts(savedPosts.filter(id => id !== postId)); // Remove save
    } else {
      setSavedPosts([...savedPosts, postId]); // Save Post
    }
  }

  const handleSavePost = (postId) => {
    toggleSavePost(postId);
  }

  const nonCurrUserPosts = posts.filter(post => post.userId !== currentUser.id);

  return <>
    <main>
    <div id="left-wallpaper">
      <img src="/images/explore-left-wallpaper.svg" alt="Left Wallpaper" />
    </div>
    <div id="main-content">
      <section id="first-column">
        {nonCurrUserPosts.slice(0, 3).map((post, index) => (
          <section id={`first-post-${index}`} key={post.id}>
            <div className="green-outer-box">
              <img src={post.postPicture} alt={`Post ${index}`} />
            </div>
            <img src="/images/post-hamburger-bar.svg" alt="Hamburger" />
            <img src="/images/save.svg" alt="Save" onClick={() => handleSavePost(post.id)} />
          </section>
        ))}
      </section>
      <section id="second-column">
        {nonCurrUserPosts.slice(3, 6).map((post, index) => (
          <section id={`second-post-${index}`} key={post.id}>
            <div className="green-outer-box">
              <img src={post.postPicture} alt={`Post ${index}`} />
            </div>
            <img src="/images/post-hamburger-bar.svg" alt="Hamburger" />
            <img src="/images/save.svg" alt="Save" onClick={() => handleSavePost(post.id)} />
          </section>
        ))}
      </section>
      <section id="third-column">
        {nonCurrUserPosts.slice(6, 9).map((post, index) => (
          <section id={`third-post-${index}`} key={post.id}>
            <div className="green-outer-box">
              <img src={post.postPicture} alt={`Post ${index}`} />
            </div>
            <img src="/images/post-hamburger-bar.svg" alt="Hamburger" />
            <img src="/images/save.svg" alt="Save" onClick={() => handleSavePost(post.id)} />
          </section>
        ))}
      </section>
    </div>
    <div id="right-wallpaper">
      <img src="/images/explore-left-wallpaper.svg" alt="Right Wallpaper" />
    </div>
  </main>
  </>;
}
