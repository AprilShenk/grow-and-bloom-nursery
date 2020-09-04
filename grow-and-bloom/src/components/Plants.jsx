import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    padding: 10px
  }
  div > img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  @media only screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    div {
      padding: 30px
    }
    div > img {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
  }

  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    div {
      padding: 30px
    }
    div > img {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
  }
`;

const Plants = ({plantData}) => {
  return (
    <StyledDiv>
      {plantData && plantData.map((plant) => (
        <div key={plant.id}>
          <img src={plant.fields.image} alt={plant.fields.image}/>
          <h3>{plant.fields.name}</h3>
        </div>
      ))}
    </StyledDiv>
  );
};

export default Plants;