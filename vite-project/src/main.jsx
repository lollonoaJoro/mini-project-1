import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import MovieDetailData from "./details/MovieDetailData.jsx";
import Layout from "./Layout.jsx";
import Navbar from "./details/Navbar.jsx";
import SearchResult from "./details/SearchResult.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/detail/:movieId" element={<MovieDetailData />} />
          <Route path="/search" element={<SearchResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
