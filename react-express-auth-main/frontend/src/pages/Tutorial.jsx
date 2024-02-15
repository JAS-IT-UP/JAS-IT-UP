import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
 Tutorial = () => {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);


    return (
    <div>
        <h1>Get the explore page to view more posts!</h1>
        <h3>Let's Get Started</h3>
        <h1>Click the plus sign to post a new project</h1>
        <button onClick={() => navigate('/')}>Create a post</button>
    </div>
        )}


  export default Tutorial;
