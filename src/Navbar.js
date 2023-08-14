import React from "react";

import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: right;
  posision: fixed;
  margin: 20px 50px;
  z-index: 15;
  li {
    padding: 15px 25px;
  }
  @media (max-width: 780px) {
    margin:0;
    flex-direction: column;
    background: skyblue;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    transition: all 0.3s linear;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    li {
      color: white;
    }
  }
`;
const Navbar = ({ open }) => {
  return (
    <div>
      <Ul open={open}>
        <li>Home</li>
        <li>News</li>
        <li>Order what you need!</li>
        <li>About us</li>
      </Ul>
    </div>
  );
};

export default Navbar;
