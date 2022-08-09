import React, { useEffect, useState } from "react";
import axios from "../Api/axios";
import Axios from "axios";
import "./rows.css";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
const base_url = "https://image.tmdb.org/t/p/original/";
function Rows({ fetchurl, title }) {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [movie, updateMovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchurl);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchurl]);

  console.log(movies);

  const fetchDatas = async (movieid) => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=ece93cfd2faa956ad506021a1436b052`
    );
    updateMovie(response.data);
    console.log(response.data);
  };

  return (
    <>
      <Dialog open={show}>
        <DialogTitle>
          <h2>{movie.title}</h2>
          <div className="tagline">{movie.tagline}</div>
        </DialogTitle>
        <DialogContent>
          <img
            src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
            alt={movie.name}
            className="dialog_back"
          />
          <p>{movie.overview}</p>
          <div className="detail">
            <p>
              {"ReleaseDate : "} {movie.release_date}
            </p>
            <p>
              {"Duration : "} {movie.runtime}
              {" min."}
            </p>
            <p>
              {"Rating : "}
              {movie.vote_average}⭐
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="seemore" onClick={() => window.open(movie.homepage)}>
            See More
          </div>
          <div className="close" onClick={() => setShow("")}>
            Close
          </div>
        </DialogActions>
      </Dialog>

      <h1 className="title">{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <div className="images" onClick={() => fetchDatas(movie.id)}>
            <img
              key={movie.id}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              className="row_poster"
              onClick={() => setShow(true)}
            />
            <div className="details">
              <h5>
                {movie?.name ||
                  movie?.title ||
                  movie.original_name ||
                  movie?.original_title}
              </h5>
              <p>{movie.vote_average} ⭐</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rows;
