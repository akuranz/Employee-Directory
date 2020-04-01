import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  color: black;
  background-color: teal;
  margin-bottom: 25px;
  padding-bottom: 25px;
  padding-top: 25px;
  border-bottom: 3px solid black;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <nav className="nav justify-content-center">
        <h1>Employee Directory</h1>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
