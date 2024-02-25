import { useContext, useEffect, useState } from "react";
import "./User.css"
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getUserPosts } from "../adapters/post-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const [userPosts, postsError] = await getUserPosts(id);
        if (postsError) {
          setErrorText(postsError.message);
        } else {
          console.log(userPosts, "this is userPosts");
          setPosts(userPosts);
        }
      } catch (error) {
        setErrorText("Error fetching user posts");
      }
    };

    fetchUserPosts();
  }, [id]);

  const createPostButton = (
    <button id="create" onClick={() => navigate('/create-post')}>+</button>
  );

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return (
    <>

      <div id="user-picture">
        {createPostButton}
        <div id="picture">
          <img id="user-profile-picture" src={userProfile.profilePicture} alt="" />
        </div>
      </div>

      {isCurrentUserProfile && (
        <button onClick={handleLogout}>Log Out</button>
      )}

      {isCurrentUserProfile && (
        <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}

      <section id="posts-container">
        {posts && posts.map((post) => {
          console.log(post, "in map")
          return (
          <Card key={post.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={post.post_picture} />
            <Card.Body>
              <Card.Title>{post.username}</Card.Title>
              <Card.Text>{post.project_description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{post.material_name}</ListGroup.Item>
            </ListGroup>
          </Card>
        )})}
      </section>
    </>
  );
}