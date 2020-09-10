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
    const update = cart.map((updateItem) => {
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
    return update;
  };

  // EVENT HANDLER CALLBACK FOR DECREMENT
  const handleDecrement = (item) => {
    const update = cart.map((updateItem) => {
      if (item.id === updateItem.id) {
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
    return update;
  };

  // GETTING EACH ITEM AND INFO FROM CART
  const item = cart.map((item) => {
    if (item.fields.count > 0) {
      return (
        <StyledDiv key={item.id}>
          <h1>{item.fields.name}</h1>
          <h3>${item.fields.price}</h3>
          <h5>Qty: {item.fields.count}</h5>
          <Button
            text="+"
            onClick={() => {
              setCart([...handleIncrement(item)]);
              localStorage.setItem(
                "cart",
                JSON.stringify([...handleIncrement(item)])
              );
            }}
          />
          <Button
            text="-"
            onClick={() => {
              setCart([...handleDecrement(item)]);
              localStorage.setItem(
                "cart",
                JSON.stringify([...handleDecrement(item)])
              );
            }}
          />
          <Button text="Delete" onClick={() => handleDelete(item)} />
        </StyledDiv>
      );
    } else {
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
    <div>
      <h1>Cart</h1>
      {item}
      <h3>Total: ${getTotal()}</h3>
    </div>
  );
};

export default Cart;
