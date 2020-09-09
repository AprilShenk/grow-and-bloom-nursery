import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Button from './Button';

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
    setCart((prevCart) => {
      if (!prevCart.find((item) => item.id === plant.id)) {
        plant.fields.count = 1;
        localStorage.setItem('cart', JSON.stringify([...prevCart, plant]))
        return [...prevCart, plant];
      } else {
        const newCart = prevCart.map((item) => {
          if (item.id === plant.id) {
            return {
              ...item,
              fields: {
                ...item.fields,
                count: item.fields.count + 1,
              },
            };
          } else {
            return item;
          }
        });
        localStorage.setItem('cart', JSON.stringify(newCart))
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
          <Button text="Read More" />
        </a>
        {plant.fields.price ? (
          <Button text="Add to Cart" onClick={handleAddToCart}/>
        ) : (
          null
        )}
      </InfoDiv>
    </InfoContainer>
  );
}
