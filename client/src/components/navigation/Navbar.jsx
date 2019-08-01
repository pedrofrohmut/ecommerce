import React from "react"
import { connect } from "react-redux"
import * as middleware from "../../store/middleware/applicationUser"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"

import PageContainer from "../globals/PageContainer"

const Navbar = ({ isAuthenticated, signout }) => (
  <NavbarStyled>
    <PageContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li>
              <Link to="/" onClick={() => signout()}>
                Sign Out
              </Link>
            </li>
            <li>
              <Link to="/user/profile">User Profile</Link>
            </li>
          </>
        )}
      </ul>
    </PageContainer>
  </NavbarStyled>
)

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
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

const mapStateToProps = state => ({
  isAuthenticated: state.applicationUser.isAuthenticated,
})

export default connect(
  mapStateToProps,
  { signout: middleware.signout },
)(Navbar)
