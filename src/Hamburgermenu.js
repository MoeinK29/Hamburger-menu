import React, { Component } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Div = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 40px;
  right: 90px;
  z-index: 20;
  display: none;
  @media (max-width: 780px) {
    display: flex;
    justify-content: space-around;
    flex-direction:column;
  }
  div {
    background: green;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin:5.4px;
    transition: all 0.35s linear;
    &:nth-child(1) {
        transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
        transform: ${(props) =>
          props.open ? 'translateX(-100%)' : 'translateX(0)'};
        opacity: ${(props) => (props.open ? 0 : 1)}
    }
    &:nth-child(3) {
        transform: ${(props) =>
          props.open ? "rotate(-45deg)" : "rotate(0deg)"}
    }
  }
`;

class Hamburgermenu extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  clickHandler = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <Div open={this.state.open} onClick={this.clickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Navbar open={this.state.open} />
      </>
    );
  }
}

export default Hamburgermenu;
