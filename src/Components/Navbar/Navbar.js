import React from "react";
import "./navbar.scss";
import { Switch } from "antd";
import { useTheme } from "../utils/Context";

const Navbar = () => {
  const { isLightTheme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };
  return (
    <section className={`container ${isLightTheme ? "light" : "dark"}`}>
      <div className="navbar">
        <div className="heading">
          <h1>E-Learning Platform</h1>
        </div>
        <div className="toggle">
          <span>light</span>
          <span className="switch">
            <Switch checked={isLightTheme} onChange={handleThemeToggle} />
          </span>
          <span>dark</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
