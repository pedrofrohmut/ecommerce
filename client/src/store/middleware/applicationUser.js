import api from "../../api/api"
import {
  applicationUserLoggedIn,
  applicationUserLoggedOut,
} from "../actions/applicationUser"
import {
  setAuthorizationHeaders,
  deleteAuthorizationHeaders,
} from "../../utils/authorizationHeaders"
import decode from "jwt-decode"

export const signup = function (newUser) {
  return function () {
    return api.applicationUser.signup(newUser).then((applicationUser) => {
      // TODO: Do something here if and only if backend have auto signin on signup
    })
  }
}

export const signin = function (credentials) {
  return function (dispatch) {
    return api.applicationUser.signin(credentials).then((applicationUser) => {
      const { email, token, isEmailConfirmed } = applicationUser
      localStorage.setItem("ecommerceJWT", token)
      setAuthorizationHeaders(applicationUser.token)
      dispatch(
        applicationUserLoggedIn({
          email,
          token,
          isEmailConfirmed,
          isAuthenticated: true,
        }),
      )
    })
  }
}

export const signinWithToken = function (token) {
  return function (dispatch) {
    if (token) {
      const payload = decode(token)
      const { email, isEmailConfirmed } = payload
      setAuthorizationHeaders(token)
      dispatch(
        applicationUserLoggedIn({
          email,
          token,
          isEmailConfirmed: isEmailConfirmed === "True",
          isAuthenticated: true,
        }),
      )
    }
  }
}

export const signout = function () {
  return function (dispatch) {
    localStorage.removeItem("ecommerceJWT")
    deleteAuthorizationHeaders()
    dispatch(
      applicationUserLoggedOut({
        isAuthenticated: false,
      }),
    )
  }
}
