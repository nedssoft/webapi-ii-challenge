import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./styled/GlobalStyles";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 72px;
  background: black;
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 15rem;
    @media (max-width: 500px) {
      justify-content: space-between;
    }
  }
`;
const Nav = styled(NavLink)`
  padding: 0 3rem;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  @media (max-width: 500px) {
    font-size: 1.5rem;
    padding: 0 0.8rem;
  }
  &.active,
  &:hover {
    text-decoration: underline;
  }
`;
export default function header() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <HeaderWrapper>
        <nav>
          <Nav exact to="/">
            Posts
          </Nav>
          <Nav to="/posts/add">Add New</Nav>
        </nav>
      </HeaderWrapper>
    </React.Fragment>
  );
}
