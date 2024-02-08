import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";

export default function ExplorePage() {
  const navigate = useNavigate();
  const [savedPosts, setSavedPosts] = useState([]);

  const toggleSavePost = (postId) => {
      if (savedPosts.includes(postId)) {
        setSavedPosts(savedPosts.filter(id => id !== postId)); // Remove post from savedPosts
      } else {
        setSavedPosts([...savedPosts, postId]); // Add post to savedPosts
      }
    }

    const handleSavePost = (postId) => {
      toggleSave(postId);
    }

  return <>
    <main>
      <div id="left-wallpaper">
        <img src="/images/explore-left-wallpaper.svg"></img>
      </div>
      <div id="main-content">
        <section id="first-column">
            <section id="first-post">
            </section>
            <section id="second-post"></section>
            <section id="third-post"></section>
        </section>
        <section id="second-column">
            <section id="first-post"></section>
            <section id="second-post"></section>
            <section id="third-post"></section>
        </section>
        <section id="third-column">
            <section id="first-post"></section>
            <section id="second-post"></section>
            <section id="third-post"></section>
        </section>
      </div>
      <div id="left-wallpaper">
        <img src="/images/explore-left-wallpaper.svg"></img>
      </div>
    </main>
  </>;
}
