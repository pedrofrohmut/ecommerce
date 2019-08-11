import React from "react"
import { connect } from "react-redux"
import * as middleware from "../../store/middleware/applicationUser"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"

import PageContainer from "../globals/containers/PageContainer"

const Navbar = ({ isAuthenticated, signout }) => (
  <NavbarStyled>
    <PageContainer>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li>
              <Link className="nav-link" to="/user/profile">
                User Profile
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/" onClick={() => signout()}>
                Sign Out
              </Link>
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

  .nav-link {
    color: var(--fullWhite);
    margin-right: 25px;
    position: relative;
    outline: 0;

    &::after {
      content: "";
      background-color: #fff;
      position: absolute;
      right: 0;
      left: 0;
      bottom: -4px;
      height: 2px;
      transform: scaleY(0);
      transition: transform 0.3s;
    }

    &:hover:after,
    &:focus:after {
      transform: scaleY(1);
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
