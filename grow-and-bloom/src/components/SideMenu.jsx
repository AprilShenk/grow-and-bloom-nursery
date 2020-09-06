import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ToggleMenu = styled.aside`
  width: 300px;
  height: 200px;
  float: right;
  background: #bfd8ad;
  color: #633d2e;
  line-height: 50px;
  font-size: 20px;
  ul {
    list-style: none;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #633d2e;
  font-weight: bold;
  :hover {
    color: #F7AF63;
  }
`;

const SideMenu = () => {
  return (
    <ToggleMenu>
      <nav>
        <ul>
          <StyledLink to="/">
            <li>Home</li>
          </StyledLink>
          <StyledLink to="/plant/new">
            <li>Request</li>
          </StyledLink>
          <StyledLink to="/about">
            <li>About Us</li>
          </StyledLink>
        </ul>
      </nav>
    </ToggleMenu>
  );
};

export default SideMenu;
