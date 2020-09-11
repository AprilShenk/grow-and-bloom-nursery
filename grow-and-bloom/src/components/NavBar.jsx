import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "./SideMenu";

// ------------STYLING------------
const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  background: #bfd8ad;
  justify-content: space-between;
  align-items: center;
  h1 {
    text-align: left;
    color: #633d2e;
    font-size: 25px;
    flex-grow: 2;
    margin 20px 10px;
    font-family: 'Dancing Script', cursive;
    font-size: 35px;
  }
  button {
    padding 10px;
  }
  @media only screen and (min-width: 750px) {
    h1 {
      font-size: 40px;
    }
  }
  @media only screen and (min-width: 1020px) {
    h1 {
      font-size: 50px;
    }
    button {
      font-size: 20px;
    }
  }
`;

const MenuIcon = styled.button`
  color: #633d2e;
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin: auto 1em;
  :hover {
    background: #f7af63;
  }
  :focus {
    outline-color: #9cddc8;
  }
`;
const CartIcon = styled.button`
  color: #633d2e;
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  :hover {
    background: #f7af63;
  }
  :focus {
    outline-color: #9cddc8;
  }
`;

const NavBar = () => {
  // ------------SETTING STATE FOR MENU------------
  const [toggleMenu, setToggleMenu] = useState(false);

  // ------------FUNCTIONS------------
  // EVENT LISTENER CALLBACK
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <StyledDiv>
        <h1>Grow and Bloom Nursery</h1>
        <Link to="/cart">
          <CartIcon>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </CartIcon>
        </Link>
        <Link to="#">
          <MenuIcon onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </MenuIcon>
        </Link>
      </StyledDiv>
      {toggleMenu && (
        <SideMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      )}
    </>
  );
};

export default NavBar;
