import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>book store</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background-color: black;

  h1 {
    color: white;
  }
`;
export default Header;
