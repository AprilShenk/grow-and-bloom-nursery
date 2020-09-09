import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #633D2E;
    color: white;
    font-weight: bold;
    padding: 8px;
    border-radius: 10px;
    width: 120px;
    align-self: center;
    border: none;
    margin: 3px;
  }
  :hover {
    background-color: #F7AF63;
  }
  :focus {
    outline: none;
  }
  @media only screen and (min-width: 750px) {

  }
  @media only screen and (min-width: 1025px) {

  }
  `;
const Button = ({text}) => {
  return (
    <StyledButton>{text}</StyledButton>
  );
};

export default Button;