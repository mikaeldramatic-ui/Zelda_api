import { useState } from "react";
import { useZeldaData } from "../hooks/useZeldaData.js";
import Card from "../components/Card.jsx";
import styles from "./Compendium.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/zeldaSlice.js";
import { useParams, useNavigate } from "react-router-dom";

function Compendium() {
  const { items, loading, error } = useZeldaData();
  const { category } = useParams();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.zelda.favorites);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <h1>Hyrule Compendium</h1>

      <p>Total favorites: {favorites.length}</p>

      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            {favorite.name}
            <button onClick={() => dispatch(removeFavorite(favorite))}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {loading && <p>Laddar...</p>}
      {error && <p>{error}</p>}

      <select
        className={styles.select}
        value={selectedCategory}
        onChange={(event) => {
          setSelectedCategory(event.target.value);
          navigate(`/compendium/${event.target.value}`);
        }}
      >
        <option value="all">All</option>
        <option value="materials">Materials</option>
        <option value="creatures">Creatures</option>
        <option value="equipment">Equipment</option>
        <option value="monsters">Monsters</option>
        <option value="treasure">Treasure</option>
      </select>

      <input
        className={styles.search}
        id="search"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      <div className={styles.cardGrid}>
        {filteredItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Compendium;
