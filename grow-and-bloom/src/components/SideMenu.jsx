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

const SideMenu = () => {
  return (
    <ToggleMenu>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/plant/new">
            <li>Request</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          
        </ul>
      </nav>
    </ToggleMenu>
  );
};

export default SideMenu;
