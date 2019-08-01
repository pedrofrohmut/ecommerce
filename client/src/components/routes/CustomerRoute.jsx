import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import PropTypes from "prop-types"

const CustomerRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />)
    }
  />
)

CustomerRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  /* eslint-disable-next-line */
  component: PropTypes.any.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.applicationUser.isAuthenticated,
})

export default connect(mapStateToProps)(CustomerRoute)
