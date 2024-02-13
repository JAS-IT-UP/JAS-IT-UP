import { useState, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function PostCard({ postPicture, projectDescription }) {
    const {currentUser} = useContext(CurrentUserContext);

    if(currentUser) {
        return (
            <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px 0' }}>
            {postPicture && <img src={postPicture} alt="Post" style={{ maxWidth: '100%', height: 'auto' }} />}
            {/* <p>{post.material}</p> */}
            <p>{projectDescription}</p>
        </div>
        )
    }
    // return (
    //     <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px 0' }}>
    //     {postPicture && <img src={postPicture} alt="Post" style={{ maxWidth: '100%', height: 'auto' }} />}
    //     {/* <p>{post.material}</p> */}
    //     <p>{projectDescription}</p>
    // </div>
    // )
};