import { useNavigate } from "react-router-dom";
import "../style/MovieCard.scss";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail");
  };
  return (
    <div className="movie-card">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={handleClick}
      />
      <h2>{movie.title}</h2>
      <p>평점: {movie.vote_average}</p>
    </div>
  );
}

export default MovieCard;
