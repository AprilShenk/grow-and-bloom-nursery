import React from 'react';
import styled from 'styled-components';

// ------------STYLING------------
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
  `;

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
};

export default Button;