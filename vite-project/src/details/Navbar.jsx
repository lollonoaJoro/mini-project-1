import { useNavigate, Link } from "react-router-dom";
import "../style/Navbar.scss";
import { useState } from "react";
// import useDebounce from "../hooks/useDebounce";

export default function Navbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  // const [debouncedValue, setdebouncedValue] = useState("");
  // const debouncedQuery = useDebounce(query);
  // console.log(debouncedQuery);

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
        <button
          type="button"
          onClick={() => navigate(`/search?query=${query}`)}
        >
          검색
        </button>
      </div>
      <div className="px=8...5 py-4">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </nav>
  );
}
