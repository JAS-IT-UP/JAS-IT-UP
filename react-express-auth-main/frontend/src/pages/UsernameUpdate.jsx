import { useContext } from "react";
import { useParams } from 'react-router-dom';
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import CurrentUserContext from "../contexts/current-user-context";
export default function UsernameUpdate() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  console.log(currentUser, "this is isCurrentUserProfile")
    return (<>
        <h1>Username Update</h1>
        {currentUser && (
        <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </>);
}