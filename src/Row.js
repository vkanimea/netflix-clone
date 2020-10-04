import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition/variable

  useEffect(() => {
    // if [], run once when thee row loads, and don't run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log("Requests " + request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // console.log("Fetch Data " + fetchData());
  }, [fetchUrl]);

  // console.log("Movies array: " + movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https:www.youtube.com/watch?v=XtMThy8QKqu
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2> {title}</h2>
      <div className="row__posters">
        {/** several row__poster(s) */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={'row__poster ${isLargeRow && "row__posterLarge"}'}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div> //row
  ); // return
} // Row

export default Row;
