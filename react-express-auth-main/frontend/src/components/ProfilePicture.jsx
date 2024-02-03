import { useState } from "react";
import { useRef } from "react";

export default function ProfilePicture({ handleFile }) {
    const [img, setImg] = useState('');
    const [src, setSrc] = useState('');
    const hiddenFileInput = useRef(null);
    
    const handleClick = (event) => {
        hiddenFileInput.current.click();
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
        handleFile(fileUploaded);
    };

    return (
        <div className="profile_img">
            <div className="flex flex-column justify-content-center align-items-center"></div>

        <button id="upload-picture-button" type="button" onClick={handleClick}>
            <img src={src} alt="" 
            />
        </button>

        <input
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            ref={hiddenFileInput}
            style={{ display: 'none' }}
        />
    </div>   
    );
};

