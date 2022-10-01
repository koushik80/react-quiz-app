import logo from "../assets/images/logo.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="devHuß" />
            <h3>React Quiz Application</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
