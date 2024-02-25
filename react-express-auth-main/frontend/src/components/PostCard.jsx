import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function PostCard({ id, postPicture, projectDescription, materialId }) {
    const {currentUser} = useContext(CurrentUserContext);
    const [posts, setPosts] = useState([]);

    const handleDelete = async () => {
        const [post, error] = await deletePost(id);
        if (error) return setErrorText(error.message);
        setPosts(post);
    }
    
    if(currentUser) {
        return (
            
            
                <button type="button" id="delete-button" onClick={handleDelete}>DELETE</button>
        )
    }
};