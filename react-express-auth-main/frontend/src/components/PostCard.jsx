import { useState, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function PostCard({ postPicture, projectDescription, material}) {
    const {currentUser} = useContext(CurrentUserContext);

    if(currentUser) {
        return (
            <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px 0', width: '300px',
            height: '300px' }}>

            <div>
            {postPicture && <img src={postPicture} alt="Post" style={{ maxWidth: '100px', height: '100px' }} />}
            </div>

            <div>
            <h3>Materials:</h3>
            <ul>
                <li>
                    {material}
                </li>
            </ul>
            </div>

            <div>
            <h3>The Revamp:</h3>
            <p>{projectDescription}</p>
            </div>
        </div>
        )
    }
};