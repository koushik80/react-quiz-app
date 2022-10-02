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
            <div className={classes.wrapper}>
              <h3>devHuß Quiz App</h3>
            </div>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
