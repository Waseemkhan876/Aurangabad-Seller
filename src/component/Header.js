import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">

        <div className="logo"> <span id="logo-color">Aurangabad</span> Sleler</div>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <ul>
            <li><a href="/">Home</a></li>

            <li className="dropdown">
              <button className="drop-btn">Popular Collections ▾</button>
              <div className="drop-menu">
                <a href="#">Raj Clothes Store</a>
                <a href="#">Raza Collections</a>
                <a href="#">Nurgis Collections</a>
                <a href="#">Home</a>
                <a href="#">More…</a>
              </div>
            </li>

            <li><a href="#">Offers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </header>
  );
}
