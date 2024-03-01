import { useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import './UsernameUpdate.css';
import { useNavigate } from "react-router-dom";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import CurrentUserContext from "../contexts/current-user-context";
export default function UsernameUpdate() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  const navigate = useNavigate();


  return (<>
    <div id="username-back">
    <div id="update-background">

      <h1 id="update-username" >Username Update</h1>
      {currentUser && (
        <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </div>

    </div>
  </>);
}