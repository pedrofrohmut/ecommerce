import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import PageContainer from "../globals/PageContainer"

const Navbar = () => (
  <NavbarStyled>
    <PageContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </PageContainer>
  </NavbarStyled>
)

const NavbarStyled = styled.div`
  background-color: var(--mainOrange);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding: 7px 0;

  li {
    display: inline-block;
  }

  a {
    color: var(--fullWhite);
    margin-right: 25px;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export default Navbar
