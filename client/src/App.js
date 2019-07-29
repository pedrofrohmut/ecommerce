import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"

const App = () => (
  <div className="App">
    <h1>App</h1>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
