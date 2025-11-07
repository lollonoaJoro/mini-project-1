import { useState, useEffect } from "react";
import MovieCard from "./details/MovieCard";
import "./style/App.scss";
import React from "react";
import debounce from "./Debounce.jsx";

export default function App() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const APPLICATION_KEY = import.meta.env.VITE_TMDB_API_KEY;
  console.log("API_KEY:", API_KEY);

  <input
  type="검색하세요"
  value={movie}
  onChange={(event) => setmovies(event.target.value)}
  />;
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=ko&page=1",
    options
  )

  .then((res) => res.json())
  .then((data) => {
    const resdata = data.results.filter(
    (tmdbmoive) => tmdbmoive.adult === false
      );
      setmovies(resdata);
    })
    .catch((err) => console.error(err));
  }, [];

  return (
          useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `bearer ${API_KEY}`,

      },
    };
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
