// components/movie-card/FavoriteCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import apiConfig from "../../api/apiConfig";
import * as Config from "../../constants/Config";

import "./movie-card.css"; // reuse same styles

const FavoriteCard = ({ item }) => {
  const { removeFromFavorites } = useFavorites();
  const link = `/${Config.HOME_PAGE}/movie/${item.id}`;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <div>
      <Link to={link}>
        <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
          <i className="bx bx-play"></i>
        </div>
        <h3>{item.title || item.name}</h3>
      </Link>
      <button
        className="btn-outline remove-fav-btn"
        onClick={() => removeFromFavorites(item.id)}
      >
        Remove from Favorites
      </button>
    </div>
  );
};

export default FavoriteCard;
