import React, { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { Squash as Hamburger } from 'hamburger-react'

export default function ExplorePostCard({ postPicture, projectDescription, materialName, id, username, profilePicture }) {
    const { currentUser } = useContext(CurrentUserContext);
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };

    return (
        <section id={`post-${id}`} key={id}>
            <div className="green-outer-box">
                <img src={postPicture} alt={`Post ${id}`} />
            </div>
            <div id="post-interactions">
                <Hamburger toggled={isOpen} onClick={handleToggle} />
                {isOpen && (
                    <>
                        <h3>Materials:</h3>
                        <ul>
                            <li>
                                {materialName}
                            </li>
                        </ul>
                        <div>
                            <h3>The Revamp:</h3>
                            <p>{projectDescription}</p>
                        </div>
                    </>
                )}
                
            </div>
        </section>
    );
}