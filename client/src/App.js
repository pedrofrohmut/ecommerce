import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"

import SiteHeader from "./components/layout/SiteHeader"

const App = () => (
  <AppStyled>
    <BrowserRouter>
      <SiteHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
      {/* SiteFooter */}
    </BrowserRouter>
  </AppStyled>
)

const AppStyled = styled.div``

export default App
