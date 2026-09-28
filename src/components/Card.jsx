import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/zeldaSlice.js";
import { Heart } from "lucide-react";

function Card({ item }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.zelda.favorites);

  const isFavorite = favorites.some((favorite) => favorite.id == item.id);

  return (
    <article className={styles.materialCard}>
      <h2 className={styles.title}>{item.name} </h2>
      <img
        className={styles.materialCardImage}
        src={item.image}
        alt={item.name}
      />
      <div className={styles.textBox}>
        <p className={styles.description}>{item.description}</p>
      </div>
      <div className={styles.textBox}>
        <h3 className={styles.locationsTitle}>Common locations:</h3>

        <div className={styles.locations}>
          {item.common_locations?.map((location) => (
            <p key={location}>{location}</p>
          ))}
        </div>
      </div>

      {item.cooking_effect && (
        <div className={styles.textBox}>
          <p className={styles.cookingEffect}>
            Cooking effect: {item.cooking_effect}
          </p>
        </div>
      )}

      <button
        className={styles.favoriteButton}
        onClick={() => {
          if (isFavorite) {
            dispatch(removeFavorite(item));
          } else {
            dispatch(addFavorite(item));
          }
        }}
        aria-label="Add to favorites"
      >
        <Heart fill={isFavorite ? "currentColor" : "none"} />
      </button>
    </article>
  );
}

export default Card;
