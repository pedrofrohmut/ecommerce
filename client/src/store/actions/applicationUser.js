import { USER_LOGGED_IN } from "./types"
import api from "../../api/api"

export const applicationUserLoggedIn = function ({ email }) {
  return {
    type: USER_LOGGED_IN,
    applicationUser: {
      email,
    },
  }
}

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
      // const { email, token, isConfirmed } = applicationUser
      // localStorage.ecommerceJWT = applicationUser.token
      // setAuthorizationHeaders(applicationUser.token)
      dispatch(
        applicationUserLoggedIn({
          email: applicationUser.email,
        }),
      )
    })
  }
}
