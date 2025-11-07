import { useNavigate, Link } from "react-router-dom";
import "../style/Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <nav className="Navbar">
      <p className="logo" onClick={handleClick}>
        재민무비
      </p>
      <div>
        <Link to="/">홈</Link>
        <Link to="/movie">영화</Link>
        <Link to="/about">소개</Link>
        <input />
      </div>
      <div className="btn">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </nav>
  );
}
