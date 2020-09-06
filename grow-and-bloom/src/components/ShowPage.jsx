import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ReadMore = styled.button`
@media only screen and (min-width: 750px) {

}
@media only screen and (min-width: 1025px) {}
    background-color: #504d4d;
    color: white;
    font-weight: bold;
    padding: 8px;
    border-radius: 10px;
    width: 120px;
  `;

const InfoContainer = styled.section`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  img {
    width: 70%;
  }

  @media only screen and (min-width: 750px) {
    img {
      width: 50%;
    }
  }
  @media only screen and (min-width: 1025px) {
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    img {
      width: 45%;
    }
  } 
  `;

const InfoDiv = styled.div`
* {
  margin: 10 auto;
}
h1 {
  margin: 10px auto 1px;
}
h6 {
  margin: 0;
}

@media only screen and (min-width: 750px) {

}
@media only screen and (min-width: 1025px) {
    margin: 40px;
    * {
      margin: 10px;
    }
  }
  `;


export default function ShowPage({plantData}) {
  const params = useParams();

  const plant = plantData.find((plant) => params.id === plant.id);

  if (!plant) {
    return <h2>Loading...</h2>
  }
  return (
    <InfoContainer>
      <img src={plant.fields.image} alt={plant.fields.name}></img>
      <InfoDiv>
        <h1>{plant.fields.name}</h1>
        <h6>({plant.fields.scientificName})</h6>
        <h4>${plant.fields.price}</h4>
        <h4>Description</h4>
        <p>{plant.fields.description}</p>
        <p>Safe for Pets: {plant.fields.petSafe}</p>
        <a href={plant.fields.link} target="_blank" rel="noopener noreferrer">
          <ReadMore>Read More</ReadMore>
        </a>
      </InfoDiv>
    </InfoContainer>
  );
}