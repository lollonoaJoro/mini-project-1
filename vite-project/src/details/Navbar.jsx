import { useNavigate, Link } from "react-router-dom";
import "../style/Navbar.scss";
import { useState } from "react";
import useDebounce from "./useDebounce";
import { useEffect } from "react";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function Navbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [debouncedValue, setdebouncedValue] = useState("");
  const debouncedQuery = useDebounce(query);
  const [movies, use] = useState("");
  console.log(debouncedQuery);


  useEffect(() => {
    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `bearer ${API_KEY}`,
      },
    };
    const params = new URLSearchParams({  
        include_adult: false,
        language: "en-US",
        page: 1,
        query: query,
      });
      const url = `https://api.themoviedb.org/3/search/movie?${params.toString()}`;
    fetch(url, option)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  });
  return (
    <nav className="Navbar">
      <p className="logo" onClick={() => navigate("/")}>
        재민무비
      </p>
      <div className="navbar-controller">
        <Link to="/">홈</Link>
        <Link to="/movie">영화</Link>
        <Link to="/about">소개</Link>

        <input
          type="text"
          placeholder="검색해"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">검색</button>
      </div>
      <div className="btn">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </nav>
  );
}
