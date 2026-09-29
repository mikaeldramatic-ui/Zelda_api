import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();

  let backgroundClass = styles.home;

  if (location.pathname.startsWith("/compendium")) {
    backgroundClass = styles.compendium;
  } else if (location.pathname === "/about") {
    backgroundClass = styles.about;
  }

  return (
    <nav className={`${styles.navbar} ${backgroundClass}`}>
      <Link className={styles.button} to="/home">
        Home
      </Link>
      <Link className={styles.button} to="/compendium">
        Compendium
      </Link>
      <Link className={styles.button} to="/about">
        About
      </Link>
    </nav>
  );
}

export default Navbar;
