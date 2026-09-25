import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/zeldaSlice.js";

function Card({ item }) {
  const dispatch = useDispatch();

  return (
    <article className={styles.materialCard}>
      <h2 className={styles.title}>{item.name} </h2>
      <img className={styles.materialCard} src={item.image} alt={item.name} />
      <p className={styles.description}>{item.description}</p>
      <h3 className={styles.locationsTitle}>Common locations:</h3>

      <div className={styles.locations}>
        {item.common_locations?.map((location) => (
          <p key={location}>{location}</p>
        ))}
      </div>

      {item.cooking_effect && (
        <p className={styles.cookingEffect}>
          Cooking effect: {item.cooking_effect}
        </p>
      )}

      <button onClick={() => dispatch(addFavorite(item))}>Favorite</button>
    </article>
  );
}

export default Card;
