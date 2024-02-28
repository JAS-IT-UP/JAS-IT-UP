import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteFooterAndFooterNav() {
  const { currentUser, setCurrentUser, logUserOut } = useContext(CurrentUserContext);

  const handleLogout = async () => {
    setCurrentUser(null);
    navigate('/');
  };

  return <footer>
        <img id="logo-footer" src="../images/upcycling.png"></img>
    <nav>
      <ul>
        {
          currentUser
          ? <li id="sign-out"><NavLink to='/' onClick={handleLogout}>SIGN OUT</NavLink></li>
            : <>
            <li></li>
            </>
        }
      </ul>
    </nav>
    <p style={{fontFamily: "Michroma", textAlign: 'center', fontSize: '0.8rem'}}>&copy; 2024. All Rights Reserved.</p>
    <a id='logo' href='/'>JAS IT UP</a>
  </footer>;
}
