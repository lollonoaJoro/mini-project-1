import { useState, useEffect } from "react";
//import movieListData from "./Data/movieListData.json";
import MovieCard from "./details/MovieCard";
import "./style/App.scss";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
function App() {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `bearer ${API_KEY}`,
      },
    };
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
      }) //data.results.filter((tmdbmoive) => tmdbmoive.adult === false)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default App;
