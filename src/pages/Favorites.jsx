import React from "react";
import { useFavorites } from "../context/FavoritesContext";

import FavoriteCard from "../components/movie-card/FavoriteCard";

import "../components/movie-grid/movie-grid.css";

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container" style={{ paddingTop: "120px" }}>
      <div className="movie-grid">
        {favorites.length === 0 ? (
          <p style={{ color: "#ccc", textAlign: "center" }}>
            No favorites added yet.
          </p>
        ) : (
          favorites.map((movie) => (
            <FavoriteCard key={movie.id} item={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
