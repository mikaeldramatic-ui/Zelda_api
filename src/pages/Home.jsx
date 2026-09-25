import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "../assets/logo.png";

function Home() {
  return (
    <main className={styles.home}>
        <div className={styles.content}>
        <img src={logo} alt="Zelda Breath Of The Wild" />

      <Link className={styles.button} to="/compendium">Go to Compendium</Link>
      </div>
    </main>
  );
}

export default Home;