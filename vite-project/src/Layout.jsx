import { Outlet } from "react-router-dom";
import NavBar from "./details/Navbar";
import Debounce from "./Debounce.jsx";

function Layout() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
