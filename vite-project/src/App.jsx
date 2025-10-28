import { useState } from "react";
import movieListData from "./Data/movieListData.json";
import MovieCard from "./details/MovieCard";
import "./style/App.scss";

function App() {
  const [movies, setmovies] = useState(movieListData.results);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default App;
