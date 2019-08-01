import api from "../../api/api"
import { applicationUserLoggedIn } from "../actions/applicationUser"

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
      localStorage.ecommerceJWT = token
      // setAuthorizationHeaders(applicationUser.token)
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
