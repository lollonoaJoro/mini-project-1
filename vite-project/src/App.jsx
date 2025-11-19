import { useState, useEffect } from "react";
import MovieCard from "./details/MovieCard";
import "./style/App.scss";
import React from "react";
import { Router } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import debounce from "./Debounce.jsx";

export default function App() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const [movies, setMovies] = useState([]);
  //console.log(movies);
  //const { id } = useParams;

  //console.log(id);

  //const [search, setSearch] = useState("");

  useEffect(() => {
    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `bearer ${API_KEY}`,
      },
    };

    fetch(url, option)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  });

  return (
    <div className="flex flex-wrap gap-4 ">
      <h1 className="w-full text-3xl">Movie List</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
