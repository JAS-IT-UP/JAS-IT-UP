import React, { useState, useEffect, useContext } from "react";
import { getAllPosts } from '../adapters/post-adapter';
import { getAllPostMaterials, getPostMaterial } from '../adapters/postMaterial-adapter';
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import ExplorePostCard from "../components/ExplorePostCard";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function ExplorePage() {
  // const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [posts, setPosts] = useState([]);
  let boo = true

  // const [savedPosts, setSavedPosts] = useState({postPicture: '', projectDescription: '', userId: ''});
  // const [postMaterials, setpostMaterials] = useState({count: '', postId: '', materialId: ''});
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
      }
        
        <section id="posts-container">
          {posts && posts.map((post) => {
            console.log(post)

            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post.post_picture} />
                <Card.Body>
                <Card.Img variant="top" src={post.profile_picture} />
                  <Card.Title>{post.username}</Card.Title>
                  <Card.Text>
                  {post.project_description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{post.material_name}</ListGroup.Item>
                  {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                </ListGroup>
                <Card.Body>
                  {/* <Card.Link href="#">Card Link</Card.Link> */}
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            );

            return(
            <div>
              <section id={`post-${post.id}`} key={post.id}>
                <img src={post.profile_picture} alt={`Posted by ${post.username}`} />
                <img src={post.post_picture} alt={`Post ${post.id}`} />
                <div className="post-interactions">
                  <div>
                    <p>{post.project_description}</p>
                    <p>{post.material_name}</p>
                  </div>
                  <div>
                    <p>{post.username}</p>
                    <p>{post.id}</p>
                  </div>
                </div>
              </section>
            </div>
          )})}
        </section>
      </div>
      <div id="right-wallpaper">
        <img src="/images/explore-left-wallpaper.svg" alt="Right Wallpaper" />
      </div>
    </main>
  </>;
}