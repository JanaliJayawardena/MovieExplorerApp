import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.css";
import * as Config from "./../../constants/Config";

import ThemeToggle from "../theme-toggle/ThemeToggle"; // ✅ Import the toggle component

const headerNav = [
  {
    display: "Home",
    path: `/${Config.HOME_PAGE}`,
  },
  {
    display: "Movies",
    path: `/${Config.HOME_PAGE}/movie`,
  },
  {
    display: "TV Series",
    path: `/${Config.HOME_PAGE}/tv`,
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkHeader);
    return () => window.removeEventListener("scroll", shrinkHeader);
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to={`/${Config.HOME_PAGE}`} className="logo-text">
            Movie Explorer
          </Link>
        </div>

        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="login-button">
            <Link to="/login">Login</Link>
          </li>
          <li>
            <ThemeToggle /> {/* ✅ Image-based sun/moon theme toggle */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
