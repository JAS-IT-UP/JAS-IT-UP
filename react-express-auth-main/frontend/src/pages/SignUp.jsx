import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import ProfilePicture from "../components/ProfilePicture";

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [formData, setFormData] = useState({
    profile_picture: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const { profile_picture, first_name, last_name, email, username, password } = formData;

    if (!profile_picture || !first_name || !last_name || !username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser(formData);
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return <>
    <form onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="create-heading">
      <h2 id="create-heading">Create an Account</h2>

      <section id="logo-signup">logo</section>

      <p>JAS IT UP!</p>

    {/* <div className="img-wrapper">
      <p id="profile-picture">Profile Picture</p>
      <ProfilePicture 
      onChange={handleChange}
      handleFile={(file) => setFormData((prevData) => ({ ...prevData, profilePicture: file }))}
      value={formData.profilePicture}
      required
/>
    </div> */}

    <div className="image-url">
      <label htmlFor="image-url">Profile Picture</label>
      <input
        autoComplete="off"
        type="text"
        id="profile-picture"
        name="profile_picture"
        placeholder="https://janesselfie.com/image.jpg"
        onChange={handleChange}
        value={formData.profile_picture}
        required
      />

    </div>

<label htmlFor="first-name">First Name</label>
      <input
        autoComplete="off"
        type="text"
        id="first-name"
        name="first_name"
        placeholder="Jane"
        onChange={handleChange}
        value={formData.first_name}
        required
      />

<label htmlFor="last-name">Last Name</label>
      <input
        autoComplete="off"
        type="text"
        id="last-name"
        name="last_name"
        placeholder="Doe"
        onChange={handleChange}
        value={formData.last_name}
        required
      />

      <label htmlFor="username">Username</label>
      <input
        autoComplete="off"
        type="text"
        id="username"
        name="username"
        placeholder="JaneTheCrafter"
        onChange={handleChange}
        value={formData.username}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        autoComplete="off"
        type="text"
        id="email"
        name="email"
        placeholder="JaneDoe@gmail.com"
        onChange={handleChange}
        value={formData.email}
      />

      <label htmlFor="password">Password</label>
      <input
        autoComplete="off"
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={formData.password} placeholder="********"
        required
      />

      <label htmlFor="password-confirm">Re-enter Password</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" 
        placeholder="********"
        required/>

      {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

      <button>Sign Up!</button>
    </form>
    { !!errorText && <p>{errorText}</p> }
    <p>Already have an account with us? <Link to="/login">Log in!</Link></p>
  </>;
}
