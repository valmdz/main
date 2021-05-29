import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <ul className="header-menu">
      <li className="header-li">
        {" "}
        <Link to="/" className="header-link">
          Home
        </Link>
      </li>
      <li className="header-li">
        {" "}
        <Link to="/about" className="header-link">
          About
        </Link>
      </li>
      <li className="header-li">
        {" "}
        <Link to="/projects" className="header-link">
          Projects
        </Link>
      </li>
      <li className="header-li">
        {" "}
        <Link to="/contact" className="header-link">
          Contact
        </Link>
      </li>
    </ul>
  );
};
