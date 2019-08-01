import React from "react"
import { connect } from "react-redux"
import * as middleware from "../../store/middleware/applicationUser"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"

import PageContainer from "../globals/PageContainer"

const Navbar = ({ signout }) => (
  <NavbarStyled>
    <PageContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/" onClick={() => signout()}>
            Sign Out
          </Link>
        </li>
      </ul>
    </PageContainer>
  </NavbarStyled>
)

Navbar.propTypes = {
  signout: PropTypes.func.isRequired,
}

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

export default connect(
  null,
  { signout: middleware.signout },
)(Navbar)
