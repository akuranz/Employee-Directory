import React from "react";
import { Link } from "react-router-dom";
import style from "styled-components";

// const Button = style.button`
//   background-color: ${props => (props.color ? props.color : "blue")};
//   border: ${({ outlined }) => (outlined ? "2px solid green" : "0")};
//   color: white;
//   border-radius: 10px;
//   padding: 10px;
// `;

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Employee Directory
      </Link>
    </nav>
  );
};

export default Header;
