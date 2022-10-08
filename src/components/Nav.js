import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="devHuß" />
            <div className={classes.wrapper}>
              <h3>devHuß</h3>
            </div>
            </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
