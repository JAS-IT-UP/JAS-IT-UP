import { useState } from "react";
import { useRef } from "react";

export default function ProfilePicture({ handleFile }) {
    const [img, setImg] = useState('');
    const [src, setSrc] = useState('');
    const hiddenFileInput = useRef(null);
    
    const handleClick = (event) => {
        hiddenFileInput.current.click(event);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if(file && file.type.substring(0,5) === "image") {
            setImg(file);
            setSrc(URL.createObjectURL(file));
    } else {
        setImg(null);
        setSrc(null);
    }
    handleFile(file);
    };

    return (
        <div className="profile-img">
            
        <button id="upload-picture-button" type="button" onClick={handleClick}>
            {img ? <img id="upload-picture" src={src} alt="chosen" /> : 'Choose Image'}
        </button>

        <input
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            ref={hiddenFileInput}
        />
    </div>   
    );
};

