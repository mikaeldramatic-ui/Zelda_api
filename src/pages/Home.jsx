import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "../assets/logo.png";

function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.content}>
        <img src={logo} alt="Zelda Breath Of The Wild" />
        <div className={styles.buttons}>
          <Link className={styles.button} to="/compendium">
            Go to Compendium
          </Link>

          <Link className={styles.button} to="/about">
            Go to About
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
