import React from "react";
import { Link } from "react-router-dom";
import "./Movieflex.css";
function Movieflex({ data, title }) {
  return (
    <div className="movieflex">
      <Link to={`${data.linkUrl}`} className="movie-link">
        <img src={data.imageUrl} alt="imgage" className="movie-img" />
        <div className="watch-now">
          <h1>{title.toUpperCase()}</h1>
        </div>
      </Link>
    </div>
  )
}

export default Movieflex;
