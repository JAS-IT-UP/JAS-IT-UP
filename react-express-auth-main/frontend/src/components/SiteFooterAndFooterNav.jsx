import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { logUserOut } from "../adapters/auth-adapter";
import { useNavigate} from "react-router-dom";

export default function SiteFooterAndFooterNav() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
 const navigate = useNavigate();
  const handleLogout = async () => {
    logUserOut();
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
    <p style={{fontFamily: "Michroma", textAlign: 'center', fontSize: '0.8rem', marginRight: '20rem'}}>&copy; 2024. All Rights Reserved.</p>
    < NavLink id='logo' to='/'>JAS IT UP</NavLink>
  </footer>;
}
