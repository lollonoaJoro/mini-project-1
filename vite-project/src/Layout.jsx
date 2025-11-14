import { Outlet } from "react-router-dom";
import NavBar from "./details/Navbar.jsx";
import Debounce from "./temp/Debounce.jsx";

function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
