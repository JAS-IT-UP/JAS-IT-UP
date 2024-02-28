import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import './Tutorial.css';
import { getUser } from "../adapters/user-adapter";
export default function Tutorial() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const loadUser = async () => {
      console.log(id)
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [currentUser]);
  console.log(currentUser)

  const createPostButton = (
    <button id="create" onClick={() => navigate('/create-post')}>+</button>
  );


  return <>
    <main>
      <div id="user-picture">
        {createPostButton}
        <div id="picture">
          <img id="user-profile-picture"  alt="" />
        </div>
      </div>
    <div id = "tutorial-colors">
    <div id = "tutorial-background">
    <div id = "circles">
    <div id="dotExplore">Go to the explore page to view more posts!</div>
    <div id="dotGetStarted">Let's Get Started</div>
    <div id="dotNewProject">Click the plus sign to post a new project!</div>
    </div>
    </div>
    </div>
    </main>
  </>;
}
 