import React, { useState, useEffect, useContext } from "react";
import { getAllPosts } from '../adapters/post-adapter';
import { getAllPostMaterials, getPostMaterial } from '../adapters/postMaterial-adapter';
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import ExplorePostCard from "../components/ExplorePostCard";



export default function ExplorePage() {
  // const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [posts, setPosts] = useState([]);
  let boo = true 

  // const [savedPosts, setSavedPosts] = useState({postPicture: '', projectDescription: '', userId: ''});
  // const [postMaterials, setpostMaterials] = useState({count: '', postId: '', materialId: ''});
  const [hamburgerClicked, setHamburgerClicked] = useState({});
  console.log(posts, "before map")

  useEffect(() => {
    const loadPosts = async () => {
      try {
      const [postCards, error] = await getAllPosts(); 


      console.log(postCards[0])
      if (error) {
        setErrorText(error.message);
      } else {
        console.log("hello? ")
        setPosts(postCards);

      }
    } catch (error) {
      setErrorText("Error fetching posts");
    }
    boo = false
    console.log(posts, "these are my posts");
  }

  loadPosts();
}, [boo]);

  // const handleSavePost = (postId) => { 
  //   toggleSavePost(postId);
  // }

  // const nonCurrUserPosts = posts.filter(post => post.userId !== currentUser.id);

  return <>
    <main>
    <div id="left-wallpaper">
      <img src="/images/explore-left-wallpaper.svg" alt="Left Wallpaper" />
    </div>
    <div id="main-content" className="scrollable-content">{
      console.log(posts)
    }
    <section id="posts-container">
      {posts && posts.map((post) => {
        console.log(post) 
            return <ExplorePostCard key={post.id} id ={post.id} projectDescription={post.projectDescription} postMaterial={post.postMaterial}/>
        } 
      )}
    </section>
    </div>
    <div id="right-wallpaper">
      <img src="/images/explore-left-wallpaper.svg" alt="Right Wallpaper" />
    </div>
  </main>
  </>;
}