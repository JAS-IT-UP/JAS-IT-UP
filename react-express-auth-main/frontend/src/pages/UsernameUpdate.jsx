import { useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import './UsernameUpdate.css';
import { useNavigate } from "react-router-dom";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import CurrentUserContext from "../contexts/current-user-context";
export default function UsernameUpdate() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  // const [userProfile, setUserProfile] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  // console.log(currentUser, "this is isCurrentUserProfile");
  const navigate = useNavigate();

  // const createPostButton = (
  //   <button id="create" onClick={() => navigate("/create-post")}>
  //     +
  //   </button>
  // );

  return (<>
    <div id="username-back">
    {/* <div id="user-picture">
          {createPostButton}
          <div id="picture">
            <img
              id="user-profile-picture"
              src={currentUser.profilePicture}
              alt=""
            />
          </div>
        </div> */}


      <h1 id="update-username" >Username Update</h1>
      {currentUser && (
        <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </div>
  </>);
}