import React from "react";
import styled from "styled-components";
import Button from "./Button";

// ------------STYLING------------
const StyledSection = styled.section`
  color: #ddd9ab;
`;

const StyledDiv = styled.div`
  background: #ddd9ab;
  border-radius: 30px;
  width: 80%;
  margin: 0 auto;
  color: #633d2e;
  * {
    margin: 3px;
  }
  img {
    width: 70%;
  }
`;

const Cart = ({ cart, setCart }) => {
  // ------------FUNCTIONS------------
  // EVENT HANDLER CALLBACK FOR DELETE
  // UPDATE LOCAL STORAGE
  const handleDelete = (item) => {
    setCart(cart.filter((removeItem) => removeItem !== item));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((removeItem) => removeItem !== item))
    );
  };

  // EVENT HANDLER CALLBACK FOR INCREMENT
  const handleIncrement = (item) => {
    setCart((prevCart) => {
      const update = prevCart.map((updateItem) => {
        if (item.id === updateItem.id) {
          return {
            ...updateItem,
            fields: {
              ...updateItem.fields,
              count: updateItem.fields.count + 1,
            },
          };
        } else {
          return updateItem;
        }
      });
      localStorage.setItem("cart", JSON.stringify([...update]));
      return [...update];
    });
  };

  // EVENT HANDLER CALLBACK FOR DECREMENT
  const handleDecrement = (item) => {
    setCart((prevCart) => {
      const update = prevCart.map((updateItem) => {
        if (item.id === updateItem.id) {
          if (item.fields.count <= 1) {
            handleDelete(item)
          }
          return {
            ...updateItem,
            fields: {
              ...updateItem.fields,
              count: updateItem.fields.count - 1,
            },
          };
        } else {
          return updateItem;
        }
      });
      localStorage.setItem("cart", JSON.stringify([...update]));
      return [...update];
    });
  };

  // GETTING EACH ITEM AND INFO FROM CART
  const item = cart.map((item) => {
    if (item.fields.count > 0) {
      return (
        <StyledDiv key={item.id}>
          <h1>{item.fields.name}</h1>
          <img src={item.fields.image} alt={item.fields.name} />
          <h3>${item.fields.price}</h3>
          <h5>Qty: {item.fields.count}</h5>
          <Button
            text="+"
            onClick={() => handleIncrement(item)}
          />
          <Button
            text="-"
            onClick={() => handleDecrement(item)}
          />
          <Button text="Delete" onClick={() => handleDelete(item)} />
        </StyledDiv>
      );
    } else {
      cart.splice(cart.indexOf((cart.find(item => item.fields.count === 0))), 1)
      localStorage.setItem('cart', JSON.stringify([...cart]))
      return null;
    }
  });

  // CALCULATE TOTAL OF CART
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.fields.price * item.fields.count;
    });
    return total;
  };

  return (
    <StyledSection>
      <h1>Cart</h1>
      {item}
      <h3>Total: ${getTotal()}</h3>
    </StyledSection>
  );
};

export default Cart;
