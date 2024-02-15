import React, { useState, useEffect, useContext } from "react";
import { getAllPosts } from '../adapters/post-adapter';
import { getAllPostMaterials, getPostMaterial } from '../adapters/postMaterial-adapter';
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";


export default function ExplorePage() {
  // const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [posts, setPosts] = useState([]);
  // const [savedPosts, setSavedPosts] = useState({postPicture: '', projectDescription: '', userId: ''});
  // const [postMaterials, setpostMaterials] = useState({count: '', postId: '', materialId: ''});
  const [hamburgerClicked, setHamburgerClicked] = useState({});

  useEffect(() => {

    const loadPosts = async () => {
      try {
      const [postCards, error] = await getAllPosts();
      if (error) {
        setErrorText(error.message);
      } else {
        setPosts(postCards);
      }
    } catch (error) {
      setErrorText("Error fetching posts");
    }
  }
  loadPosts();
}, []);

  // const toggleSavePost = (postId) => {
  //   if (savedPosts.includes(postId)) {
  //     setSavedPosts(savedPosts.filter(id => id !== postId)); // Remove save
  //   } else {
  //     setSavedPosts([...savedPosts, postId]); // Save Post
  //   }
  // }

  // const handleSavePost = (postId) => { 
  //   toggleSavePost(postId);
  // }

  // const nonCurrUserPosts = posts.filter(post => post.userId !== currentUser.id);

  const handleHamburgerToggle = async (e, post) => {
    e.preventDefault();
    setHamburgerClicked(prevState => ({
      ...prevState,
      [post.id]: !prevState[post.id] 
    }));
  }

  return <>
    <main>
    <div id="left-wallpaper">
      <img src="/images/explore-left-wallpaper.svg" alt="Left Wallpaper" />
    </div>
    <div id="main-content" className="scrollable-content">
    <section id="posts-container">
      {posts.map((post, index) => (
        <section id={`post-${index}`} key={post.id}>
          <div className="green-outer-box">
            <img src={post.postPicture} alt={`Post ${index}`} />
          </div>
          {hamburgerClicked[post.id] ? (
            <img src="/images/close.svg" alt="Close" onClick={() => handleHamburgerToggle(post.id)} />
          ) : (
            <img src="/images/hamburger.svg" alt="Hamburger" onClick={(e) => handleHamburgerToggle(e, post.id)} />
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