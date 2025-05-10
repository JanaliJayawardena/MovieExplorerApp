import React from "react";
import { useTheme } from "../../context/ThemeContext";

import sunIcon from "../../assets/icons/sun.png";
import moonIcon from "../../assets/icons/moon.png";

import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle theme">
      <img
        src={theme === "dark" ? sunIcon : moonIcon}
        alt={theme === "dark" ? "Light mode" : "Dark mode"}
        className="theme-icon"
      />
    </button>
  );
};

export default ThemeToggle;
