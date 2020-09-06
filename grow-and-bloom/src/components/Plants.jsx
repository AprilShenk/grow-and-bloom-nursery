import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #633d2e;
  div {
    margin: 20px;
    padding: 10px;
    background: #ddd9ab;
    border-radius: 10px;
  }
  div > img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
  .plant-info {
    display: none;
  }

  @media only screen and (min-width: 750px) {
    grid-template-columns: 1fr 1fr 1fr;
    div {
      margin: 15px;
    }
  }

  @media only screen and (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
    div > img {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
    .plant-info {
      display: initial;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #633d2e;
`;

const Plants = ({ plantData }) => {
  const plant = plantData.map((plant) => (
    <StyledLink to={`/plant/${plant.id}`} key={plant.id}>
      <div key={plant.id}>
        <img src={plant.fields.image} alt={plant.fields.image} />
        <br></br>
        <h3 className="plant-info">{plant.fields.name}</h3>
        <br></br>
        <h3 className="plant-info">${plant.fields.price}</h3>
      </div>
    </StyledLink>
  ));

  return <StyledDiv>{plant}</StyledDiv>;
};

export default Plants;
