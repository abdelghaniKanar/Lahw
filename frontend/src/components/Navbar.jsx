import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import lightIcon from "../assets/light-icon.png";
import darkIcon from "../assets/dark-icon.png";

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Nav and Theme Toggle */}
        <nav className="flex items-center gap-6">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg ${
                isActive
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300"
              }`
            }
          >
            About
          </NavLink>

          {/* Theme Toggle Button with Image */}
          <button onClick={() => setIsDark(!isDark)} aria-label="Toggle Theme">
            <img
              src={isDark ? darkIcon : lightIcon}
              alt="Theme Icon"
              className="h-6 w-6 object-contain"
            />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
