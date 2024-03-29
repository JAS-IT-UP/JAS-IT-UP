import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createPost } from "../adapters/post-adapter";
import Dropdown from "../components/DropDown"
import './CreatePost.css'

export default function CreatePostPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const [formData, setFormData] = useState({ postPicture: '', projectDescription: '', materialId: 0 });
  const [posts, setPosts] = useState([]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorText('')
    const { postPicture, projectDescription, materialId } = formData
    if(!postPicture || !projectDescription ){
      return setErrorText('Missing Picture or Description')
    };

    const userId = currentUser.id;

    const payload = {...formData, materialId, userId}
    console.log(payload)

    const [post, error] = await createPost(payload); 
    if(error){
        return setErrorText(error.message)
    } 
    setPosts([...posts, post]);


    setFormData({ postPicture: '', projectDescription: '', materialId: 0});
    navigate('/explore');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData, 
        [name]: value, 
    })) 
  };

  return (
    <div id='entirety'> 
    <div id='back-page'>
    <form onSubmit={handleSubmit} id='create-post-form' onChange={handleChange} aria-labelledby="create-heading">
      <div id= "picture-section"> 
      <label htmlFor="image"> <h1 id="create-heading">Picture:</h1> </label>
      <input type="" name="postPicture" id="image" except="image/*" placeholder="Add An Image Of Your Finished Project Here" 
      onChange={handleChange} 
      value={formData.postPicture} required></input>
      </div>

      <div className="materials-section"> 
      <label htmlFor="materials"> <h1 id="materials">Materials:</h1></label> 
      
      <Dropdown formData={formData} setFormData={setFormData} onChange={handleChange}/>
      </div>

      <div className="description-section"> 
      <label htmlFor="description"> <h1 id='revamp'> The Revamp:</h1></label> 
      <textarea type="text" id="description" name="projectDescription" placeholder="This Is Where You Help Others JAS UP The Materials They Have. Give Us A Step By Step Description Of Your Project." onChange={handleChange} 
      value={formData.projectDescription}  required></textarea>
      </div>

      <button id="post" type="submit">POST</button>
    </form>
    <div>
    </div>
    </div>
    </div>
  );
}