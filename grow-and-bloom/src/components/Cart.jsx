import React from "react";

const Cart = ({ cart, setCart }) => {

  const item = cart.map((item) => (
    <div>
      <h1>{item.fields.name}</h1>
      <h3>${item.fields.price}</h3>
      <h5>{item.fields.count}</h5>
    </div>
  ));

  return <div>{item}</div>;
};

export default Cart;
