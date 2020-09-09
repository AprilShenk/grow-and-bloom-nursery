import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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

const InfoContainer = styled.section`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  background: #bfd8ad;
  border-radius: 30px;
  padding: 20px;
  img {
    width: 70%;
    margin: 30px;
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

export default function ShowPage({ plantData, cart, setCart }) {
  const params = useParams();

  const plant = plantData.find((plant) => params.id === plant.id);

  const handleAddToCart = () => {
    //   // plant.fields.price > 0
    //   //   ? setCart([...cart, plant])
    //   //   : null

    setCart((prevCart) => {
      // console.log("before map", prevCart);
      const newCart = prevCart.map((item) => {
        console.log("in map", prevCart);
        console.log("in map", item);
        // console.log(plant.id);
        // console.log(item.id);
        return {
          ...item,
          fields: {
            category: item.fields.category,
            count: item.fields.count + 1,
            description: item.fields.description,
            image: item.fields.image,
            link: item.fields.link,
            name: item.fields.name,
            petSafe: item.fields.petSafe,
            price: item.fields.price,
            scientificName: item.fields.scientificName,
          },
        };
      });
      // console.log(prevCart)
      if (!prevCart.length) {
        plant.fields.count = 1
        return [...prevCart, plant];
      } else {
        console.log("new");
        return newCart;
      }
    });
  };

  if (!plant) {
    return <h2>Loading...</h2>;
  }
  return (
    <InfoContainer>
      <img src={plant.fields.image} alt={plant.fields.name}></img>
      <InfoDiv>
        <h1>{plant.fields.name}</h1>
        <h6>({plant.fields.scientificName})</h6>
        {plant.fields.price ? (
          <h4>${plant.fields.price}</h4>
        ) : (
          <h4>Out of Stock</h4>
        )}
        <h4>Description</h4>
        <p>{plant.fields.description}</p>
        {plant.fields.petSafe ? (
          <p>Safe for Pets: {plant.fields.petSafe}</p>
        ) : null}
        <a href={plant.fields.link} target="_blank" rel="noopener noreferrer">
          <StyledButton>Read More</StyledButton>
        </a>
        <StyledButton onClick={handleAddToCart}>Add to Cart</StyledButton>
      </InfoDiv>
    </InfoContainer>
  );
}
