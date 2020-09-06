import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    padding: 10px;
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
      padding: 30px;
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
      padding: 30px;
    }
    div > img {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: brown;
`;

const Plants = ({ plantData }) => {
  const plant = plantData.map((plant) => (
    <StyledLink to={`/plant/${plant.id}`} key={plant.id}>
      <div key={plant.id}>
        <img src={plant.fields.image} alt={plant.fields.image} />
        <h3>{plant.fields.name}</h3>
      </div>
    </StyledLink>
  ));

  return (
    <>
      <StyledDiv>{plant}</StyledDiv>
      <Link to="/plant/new">
        <h3>Do we not have want you want? Add a request</h3>
      </Link>
      
    </>
  );
};

export default Plants;
