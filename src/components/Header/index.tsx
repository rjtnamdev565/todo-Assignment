import { useContext } from "react";
import { ThemeContext } from "../../App";

import iconMoon from "../../assets/icon-moon.svg";
import iconSun from "../../assets/icon-sun.svg";

import "./index.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Todo</h1>
      <img
        src={theme === "light" ? iconMoon : iconSun}
        alt="theme toggle"
        onClick={toggleTheme}
      />
    </header>
  );
};

export default Header;
