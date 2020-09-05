import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  width: 100vw;
  background: #0B6623;
  h1 {
    color: white;
    font-size: 25px;
  }
  @media only screen and (min-width: 750px) {

  }
  @media only screen and (min-width: 1025px) {

  }
`;

const NavBar = (props) => {
  return (
    <StyledDiv>
      <h1>Grow and Bloom Nursery</h1>
    </StyledDiv>
  );
};

export default NavBar;