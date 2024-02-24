import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header className="sticky">
    <nav>
      <ul>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/explore'>EXPLORE</NavLink></li>
        {/* <li><NavLink to='/users' end={true}>Users</NavLink></li> */}
        {
          currentUser
          ? <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            : <>
              <li><NavLink to='/login'>LOGIN</NavLink></li>
            </>
        }
      </ul>
    </nav>
    <a id='logo' href='/'>JAS IT UP</a>
  </header>;
}
