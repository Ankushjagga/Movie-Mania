import React,{useState} from 'react'
import Header from "../../components/Header/header";
import Footer from '../../components/Footer/Footer';
import { AiOutlineSearch } from "react-icons/ai";
import Axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import "./search.css"
const base_url = "https://image.tmdb.org/t/p/original/";

function Action() {
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);
    const [movie, updateMovie] = useState([]);
  const [timeoutid,settimeoutid]=useState();


    const fetchsearch= async  (searchString)=>{
        const response=    await Axios.get (`https://api.themoviedb.org/3/search/movie?api_key=ece93cfd2faa956ad506021a1436b052&query=${searchString}`)
        setMovies(response.data.results)
        console.log(response.data.results);
      }


const onTextChange=(event)=>{
    clearTimeout(timeoutid)
    const timeout=setTimeout(() => {
        fetchsearch(event.target.value)
    }, 500);
    settimeoutid(timeout);
   
}

const fetchDatas = async (movieid) => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieid}?api_key=ece93cfd2faa956ad506021a1436b052`
    );
    updateMovie(response.data);
    // console.log(response.data);
  };

    return (
        <div>
              <Header />
              <div className='find'>
                <input type="search" placeholder="search ur faviorate movie 😄 " className="searchfind" onChange={onTextChange}/>
                <AiOutlineSearch className='searchicon' />
              </div>
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

{movies.length ?

      <div className="row_posters">
        {movies.map((movie) => (
          <div className="images" onClick={() => fetchDatas(movie.id)} key={movie.id}>
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
:
<h1 className='placeh'>search your faviourate Movie 😄</h1>
}
            <Footer/>
        </div>
    )
}

export default Action
