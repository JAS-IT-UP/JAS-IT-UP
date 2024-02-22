import React, { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import  Hamburger from 'hamburger-react';

export default function ExplorePostCard({ postPicture, projectDescription, materialName, id, username, profilePicture}) {
    const { currentUser } = useContext(CurrentUserContext);
    const [isOpen, setOpen] = useState(false);

    <Hamburger toggled={isOpen} toggle={setOpen} />


    return (
        <section id={`post-${id}`} key={id}>
            {/* <img src={profilePicture} alt={`Posted by ${username}`}/> */}
            <img src={postPicture} alt={`Post ${id}`} />
            <div className="post-interactions">
                <Hamburger onToggle={toggled => {
                    if(toggled){
                        (
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
                        )
                    } else {
                        //close a menu
                    }
                }} />
            </div>
        </section>
    );
}