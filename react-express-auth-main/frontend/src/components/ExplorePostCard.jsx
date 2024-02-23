import React, { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import  Hamburger from 'hamburger-react';

export default function ExplorePostCard({ postPicture, projectDescription, materialName, id, username, profilePicture}) {
    const { currentUser } = useContext(CurrentUserContext);
    const [isOpen, setOpen] = useState(false);

    <Hamburger toggled={isOpen} toggle={setOpen} />
    console.log(postPicture, projectDescription, materialName, id, username, profilePicture);
    return (
        <section id={`post-${id}`} key={id}>
            <img src={profilePicture} alt={`Posted by ${username}`}/>
            <img src={postPicture} alt={`Post ${id}`} />
            <div className="post-interactions">
                <div>
                    <p>{projectDescription}</p>
                    <p>{materialName}</p>
                </div>
                <div>
                    <p>{username}</p>
                    <p>{id}</p>
                </div>
            </div>
        </section>
    );
}