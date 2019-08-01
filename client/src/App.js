import React from "react"
import { connect } from "react-redux"
import * as middleware from "./store/middleware/applicationUser"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"

import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"

import SiteHeader from "./components/layout/SiteHeader"

const App = ({ signinWithToken }) => {
  const token = localStorage.getItem("ecommerceJWT")
  if (token) {
    signinWithToken(token)
  }
  return (
    <AppStyled>
      <BrowserRouter>
        <SiteHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
        {/* SiteFooter */}
      </BrowserRouter>
    </AppStyled>
  )
}

App.propTypes = {
  signinWithToken: PropTypes.func.isRequired,
}

const AppStyled = styled.div``

export default connect(
  null,
  { signinWithToken: middleware.signinWithToken },
)(App)
