import api from "../../api/api"
import {
  applicationUserLoggedIn,
  applicationUserLoggedOut,
} from "../actions/applicationUser"
import {
  setAuthorizationHeaders,
  deleteAuthorizationHeaders,
} from "../../utils/authorizationHeaders"

export const signup = function (newUser) {
  return function () {
    return api.applicationUser.signup(newUser).then((applicationUser) => {
      /* eslint-disable-next-line no-console */
      console.log("Action Api Return", applicationUser)
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
        }),
      )
    })
  }
}

export const signout = function () {
  return function (dispatch) {
    localStorage.removeItem("ecommerceJWT")
    deleteAuthorizationHeaders()
    dispatch(applicationUserLoggedOut())
  }
}
