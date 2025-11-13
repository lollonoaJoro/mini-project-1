import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/MovieDetailData.scss";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieDetailData() {
  const [movies, setmovies] = useState([]);
  const { movieId } = useParams();
  console.log(movies);
  console.log(movies.overview);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `bearer ${API_KEY}`,
      },
    };
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=ko&page=1`,
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setmovies(data);
      }) //data.results.filter((tmdbmoive) => tmdbmoive.adult === false)
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <div className="detail-card">
      <div className="detail-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt={`${movies.title}`}
        />
      </div>
      <div className="detail-vote_average">
        <div className="detail-title">{movies.title}</div>
        평점 : {movies.vote_average}
        <p>{movies.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetailData;
