import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";

function SignOut() {
    const navigate = useNavigate();
    const { setCurrentUser } = useContext(CurrentUserContext);

    const handleLogout = async () => {
        setCurrentUser(null);
        navigate('/');
    }

    return (
        <button onClick={handleLogout}>Sign Out</button>
    )
}

export default SignOut;