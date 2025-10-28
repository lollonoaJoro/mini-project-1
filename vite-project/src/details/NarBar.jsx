import { useNavigate } from "react-router-dom";
import "../style/NarBar.scss";

export default function NavBar() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <nav className="navbar">
      <p className="logo" onClick={handleClick}>
        재민무비
      </p>
      <div>
        <input />
      </div>
      <div className="btn">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </nav>
  );
}
