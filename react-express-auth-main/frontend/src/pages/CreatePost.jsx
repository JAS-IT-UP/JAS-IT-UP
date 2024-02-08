import { useState, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { createPost } from "../adapters/post-adapter";
import Dropdown from "../components/DropDown";


export default function CreatePostPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [errorText, setErrorText] = useState('');
  const [formData, setFormData] = useState({postPicture: '', postDescription: ''})
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorText('')
    const {postPicture, postDescription} = formData
    if(!postPicture || !postDescription){ 
        return setErrorText('Missing Picture or Description')
    }

    
    const [post, error] = await createPost(formData); 
    if(error){
        return setErrorText(error.message)
    } 
    setCurrentUser(user)
    Navigate('/explore')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData, 
        [name]: value, 
    })) 
  };

  const handleImageChange = (e) => {

  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="create-heading">
      <h1 id= "create-heading">Picture:</h1>
      <div id= "picture-section"> 
      <label htmlFor="image">Picture:</label>
      <input type="" name="image" id="image" except="image/*" placeholder="Add An Image Of Your Finished Project Here" onChange={handleImageChange} required></input>
      </div>

      <div className="materials-section"> 
      <label htmlFor="materials">Materials:</label> 
      <h2>List Your Repurposed Materials Here</h2>
      <Dropdown/>
      </div>

      <div className="description-section"> 
      <label htmlFor="description">The Revamp:</label> 
      <textarea type="text" id="description" name="description" placeholder="This Is Where You Help Others JAS UP The Materials They Have. Give Us A Step By Step Description Of Your Project." onChange={handleChange} required></textarea>
      </div>

      <button type="submit">POST</button>
    </form>
  );
}

