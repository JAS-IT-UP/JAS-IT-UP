import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import './Tutorial.css';
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
export default function Tutorial() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);


console.log(currentUser)
  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [currentUser]);
  console.log(currentUser)
  const handleCreatePostClick = () => {
    navigate('/create-post');
  };

  const createPostButton = (
    <button id="create" onClick={() => navigate('/create-post')}>+</button>
  );

  return (<>
    <main>
    <div id = "tutorial-colors"> 
    <div id = "tutorial-background">
    
    <div id="user-picture">
    {createPostButton}
    <div id="picture">
    <img id="user-profile-picture" src={currentUser.profilePicture} alt="" />
    </div>
    </div>
    <div id = "circles">
    <div id="dotExplore">Go to the explore page to view more posts</div>
    <div id="dotGetStarted">Let's Get Started</div>
    <div id="dotNewProject">Click the plus sign to post a new project</div>
    </div>
    </div>
    </div>
    </main>
  </>);
};
 