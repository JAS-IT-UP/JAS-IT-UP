import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import CurrentUserContext from "../contexts/current-user-context";
export default function UsernameUpdate() {
    const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
//   const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);


//   useEffect(() => {
//     const loadUser = async () => {
//       const [user, error] = await getUser(id);
//       if (error) return setErrorText(error.message);
//       setUserProfile(user);
//     };

//     loadUser();
//   }, [id]);
    return <>
        <h1>Username Update</h1>
        {isCurrentUserProfile && (
        <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </>;
}