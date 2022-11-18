import iconMoon from "../../assets/icon-moon.svg";

import "./index.css";

const Header = () => {
  return (
    <header>
      <h1>Todo</h1>
      <img src={iconMoon} alt="theme toggle" />
    </header>
  );
};

export default Header;
