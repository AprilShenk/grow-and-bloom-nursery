import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "./SideMenu";

const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 10px 0;
  width: 100vw;
  background: #bfd8ad;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #633d2e;
    font-size: 25px;
  }
  * {
    margin: 0.8em;
  }
  @media only screen and (min-width: 750px) {
  }
  @media only screen and (min-width: 1025px) {
  }
`;

const MenuIcon = styled.button`
  color: #633d2e;
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
`;



const NavBar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <StyledDiv>
        <h1>Grow and Bloom Nursery</h1>
        <MenuIcon onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </MenuIcon>
      </StyledDiv>
      { toggleMenu && <SideMenu />}
    </>
  );
};

export default NavBar;
