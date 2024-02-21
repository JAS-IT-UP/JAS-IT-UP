import { useState, useContext, useEffect } from "react";
import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { deletePost } from "../adapters/post-adapter";

export default function PostCard({ id, postPicture, projectDescription, materialName }) {
    const {currentUser} = useContext(CurrentUserContext);
    const [errorText, setErrorText] = useState(null);
    const [posts, setPosts] = useState([]);

    const handleDelete = async () => {
        const [post, error] = await deletePost({ id });
        if (error) return setErrorText(error.message);
        setPosts(posts => { return posts.filter(post => post.id !== id)});
        return post 
        // post([]);
    }
    console.log(id, "this is my post id")

    
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
                    {materialName}
                </li>
            </ul>
            </div>

            <div>
            <h3>The Revamp:</h3>
            <p>{projectDescription}</p>
            </div>
            <div>
                <button type="button" id="delete-button" onClick={() => handleDelete(id)}>DELETE</button>
            </div>
        </div>
        )
    }
};

