import React, { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function ExplorePostCard({ postPicture, projectDescription, materialName, id, username, profilePicture}) {
    const { currentUser } = useContext(CurrentUserContext);

    return (
        <section id={`post-${id}`} key={id}>
            {/* <img src={profilePicture} alt={`Posted by ${username}`}/> */}
            <div className="green-outer-box">
                <img src={postPicture} alt={`Post ${id}`} />
            </div>
        </section>
    );
}