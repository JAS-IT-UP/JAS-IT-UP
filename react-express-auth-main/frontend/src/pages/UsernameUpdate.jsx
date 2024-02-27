import { useContext } from "react";
import { useParams } from 'react-router-dom';
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import CurrentUserContext from "../contexts/current-user-context";
export default function UsernameUpdate() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

    return <>
        <h1>Username Update</h1>
        {isCurrentUserProfile && (
        <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </>;
}