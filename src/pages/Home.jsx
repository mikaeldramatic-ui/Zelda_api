import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "../assets/logo.png";

function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.content}>
        <img src={logo} alt="Zelda Breath Of The Wild" />
      </div>
    </main>
  );
}

export default Home;
