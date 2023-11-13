import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Index() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <header>
        <h2>Kelompok 06</h2>
        <p>Modul 6 - PWA 2</p>
      </header>
      <nav>
        <ul>
          <li className={currentPage === "home" ? "active" : ""}>
            <Link to="/">
              <button onClick={() => handlePageChange("home")}>Home</button>
            </Link>
          </li>
          <li className={currentPage === "about" ? "active" : ""}>
            <Link to="/about">
              <button onClick={() => handlePageChange("about")}>About</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
