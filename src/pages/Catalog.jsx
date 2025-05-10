import React from "react";

import { useParams } from "react-router";
import MovieGrid from "../components/movie-grid/MovieGrid";


import { category as cate } from "./../api/tmdbApi";

const Catalog = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <div className="container" style={{ paddingTop: "150px" }}>
    <div className="section mb-3">
      <MovieGrid category={category} />
    </div>
  </div>
  
    
  );
};

export default Catalog;