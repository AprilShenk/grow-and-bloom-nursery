import React from "react";
import styled from "styled-components";
import Button from "./Button";

// ------------STYLING------------
const StyledDiv = styled.div`
  background: #ddd9ab;
  border-radius: 30px;
  width: 80%;
  margin: 0 auto;
`;

const Cart = ({ cart, setCart }) => {
  // ------------FUNCTIONS------------
  // EVENT HANDLER CALLBACK
  // UPDATE LOCAL STORAGE
  const handleDelete = (item) => {
    setCart(cart.filter((removeItem) => removeItem !== item));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((removeItem) => removeItem !== item))
    );
  };

  const handleIncrement = (item) => {
    console.log(cart);
    const update = cart.map((item) => {
      console.log(item.fields.count);
      return {
        ...item,
        fields: {
          ...item.fields,
          count: item.fields.count + 1,
        },
      };
    });
    return update;
  };

  const handleDecrement = (item) => {
    console.log(cart);
    const update = cart.map((item) => {
      console.log(item.fields.count);
      return {
        ...item,
        fields: {
          ...item.fields,
          count: item.fields.count - 1,
        },
      };
    });
    return update;
  };

  // GETTING EACH ITEM AND INFO FROM CART
  const item = cart.map((item) => (
    <StyledDiv key={item.id}>
      <h1>{item.fields.name}</h1>
      <h3>${item.fields.price}</h3>
      <h5>Qty: {item.fields.count}</h5>
      <Button
        text="+"
        onClick={() => {
          setCart([...handleIncrement(item)])
          localStorage.setItem(
            "cart",
            JSON.stringify([...handleIncrement(item)])
          );
        }} />
      <Button
        text="-"
        onClick={() => {
          setCart([...handleDecrement(item)])
          localStorage.setItem(
            "cart",
            JSON.stringify([...handleDecrement(item)])
          );
        }} />
      <Button text="Delete" onClick={() => handleDelete(item)} />
    </StyledDiv>
  ));

  // CALCULATE TOTAL OF CART
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.fields.price * item.fields.count;
    });
    return total;
  };

  return (
    <div>
      <h1>Cart</h1>
      {item}
      <h3>Total: ${getTotal()}</h3>
    </div>
  );
};

export default Cart;
