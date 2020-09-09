import React from 'react';
import styled from 'styled-components';

// ------------STYLING------------
const BackgroundDiv = styled.div`
  background-image: url("https://i0.pickpik.com/photos/397/102/501/frond-green-leaves-nature-preview.jpg");
  height: 200px;
  background-position: center;
  `;

const DisplayBanner = () => {
  return (
    <BackgroundDiv>
    </BackgroundDiv>
  );
};

export default DisplayBanner;