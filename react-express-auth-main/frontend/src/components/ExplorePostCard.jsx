import React, { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function ExplorePostCard({  projectDescription, postPicture, materialName, id}) {
    const { currentUser } = useContext(CurrentUserContext);

    return (
        <section id={`post-${id}`} key={id}>
            <div className="green-outer-box">
                <img src={postPicture} alt={`Post ${id}`} />
            </div>
            {/* {currentUser && (
                <>
                    {hamburgerClicked ? (
                        <img src="/images/close.svg" alt="Close" onClick={() => handleHamburgerToggle(id)} />
                    ) : (
                        <img src="/images/hamburger.svg" alt="Hamburger" onClick={() => handleHamburgerToggle(index)} />
                    )}
                    <img src="/images/save.svg" alt="Save" onClick={() => handleSavePost(index)} /> */}
                {/* </> */}
            {/* )} */}
        </section>
    );
}