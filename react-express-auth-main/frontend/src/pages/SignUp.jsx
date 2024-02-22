import { useContext, useState } from "react";
import "./SignUp.css";
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
    profilePicture: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const { profilePicture, firstName, lastName, email, username, password } = formData;

    if (!profilePicture || !firstName || !lastName || !username || !password) return setErrorText('Missing username or password');

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
  <div className="split-screen">
      <h2 id="create-heading">Create an Account</h2>

    <form onSubmit={handleSubmit} onChange={handleChange} id="create-form" aria-labelledby="create-heading">
    <div className="left"> 
    <section className="copy"></section>

      <section id="logo-signup">logo</section>

      <p id="logo-name">JAS IT UP!</p>
    </div>

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
        name="profilePicture"
        placeholder="https://janesselfie.com/image.jpg"
        onChange={handleChange}
        value={formData.profilePicture}
        required
      />

    </div>

<label htmlFor="first-name">First Name</label>
      <input
        autoComplete="off"
        type="text"
        id="first-name"
        name="firstName"
        placeholder="Jane"
        onChange={handleChange}
        value={formData.firstName}
        required
      />

<label htmlFor="last-name">Last Name</label>
      <input
        autoComplete="off"
        type="text"
        id="last-name"
        name="lastName"
        placeholder="Doe"
        onChange={handleChange}
        value={formData.lastName}
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
    <p>Already have an account with us? <Link to="/login">Log in!</Link></p>
    </form>
    { !!errorText && <p>{errorText}</p> }
  </div>
  </>;
}
