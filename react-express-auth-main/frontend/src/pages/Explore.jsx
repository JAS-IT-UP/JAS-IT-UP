import React, { useState, useEffect, useContext } from "react";
import { getAllPosts, getPost } from '../adapters/post-adapter';
import { getAllPostMaterials, getPostMaterial } from '../adapters/postMaterial-adapter';
import { useNavigate, Navigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";


export default function ExplorePage() {
  // const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [posts, setPosts] = useState({postPicture: '', projectDescription: '', userId: ''});
  const [savedPosts, setSavedPosts] = useState({postPicture: '', projectDescription: '', userId: ''});
  const [postMaterials, setpostMaterials] = useState({count: '', postId: '', materialId: ''});

//   if (!currentUser) return <Navigate to="/" />;

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

  const toggleHamburgerBar = (postId) => {
    setHamburgerClicked(prevState => ({
      ...prevState,
      [postId]: !prevState[postId] 
    }));
  }

  return <>
    <main>
    <div id="left-wallpaper">
      <img src="/images/explore-left-wallpaper.svg" alt="Left Wallpaper" />
    </div>
    <div id="main-content" className="scrollable-content">
    <section id="posts-container">
      {nonCurrUserPosts.map((post, index) => (
        <section id={`post-${index}`} key={post.id}>
          <div className="green-outer-box">
            <img src={post.postPicture} alt={`Post ${index}`} />
          </div>
          {hamburgerClicked[post.id] ? (
            <img src="/images/close.svg" alt="Close" onClick={() => toggleHamburgerBar(post.id)} />
          ) : (
            <img src="/images/hamburger.svg" alt="Hamburger" onClick={() => toggleHamburgerBar(post.id)} />
          )}
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