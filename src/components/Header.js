import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  color: white;
  background-color: teal;
  margin-bottom: 25px;
  padding-bottom: 25px;
  padding-top: 25px;
  border-bottom: 3px solid black;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="row justify-content-center">
        <h1>Employee Directory</h1>
      </div>
      <div className="row justify-content-center">
        <p>
          Click on buttons to sort or use the search box to narrow your results.
        </p>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
