import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed; 
  bottom: 0px;
  text-align: center; 
  width: 100%;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <StyledDiv>
      &copy; 2020 April Shenk
    </StyledDiv>
  );
};

export default Footer;