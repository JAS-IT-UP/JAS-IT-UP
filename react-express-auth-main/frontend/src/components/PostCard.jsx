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
            <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px 0', width: '300px',
            height: '300px' }}>

            <div>
            {postPicture && <img src={postPicture} alt="Post" style={{ maxWidth: '100px', height: '100px' }} />}
            </div>

            <div>
            <h3> Materials: </h3>
            <ul>
                <li> 
                    {materialId}
                    {/* {materialName} */}
                </li>
            </ul>
            </div>

            <div>
            <h3>The Revamp:</h3>
            <p>{projectDescription}</p>
            </div>
            <div>
                <button type="button" id="delete-button" onClick={handleDelete}>DELETE</button>
            </div>
        </div>
        )
    }
};