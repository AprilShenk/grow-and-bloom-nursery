import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledDiv = styled.div`
  background: #ddd9ab;
  border-radius: 30px;
  width: 80%;
  margin: 0 auto;
`;

const Cart = () => {
  const localCart = JSON.parse(localStorage.getItem("cart"));
  console.log(localCart);

  const handleDelete = () => {
    console.log("clicked");
  };

  const item = localCart.map((item) => (
    <StyledDiv key={item.id}>
      <h1>{item.fields.name}</h1>
      <h3>${item.fields.price}</h3>
      <h5>Qty: {item.fields.count}</h5>
      <Button text="Delete" onClick={handleDelete} />
    </StyledDiv>
  ));

  return (
    <div>
      <h1>Cart</h1>
      {item} 
    </div>
  );
};

export default Cart;
