import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types/applicationUser"

export const applicationUserLoggedIn = function ({
  email,
  token,
  isEmailConfirmed,
  isAuthenticated,
}) {
  return {
    type: USER_LOGGED_IN,
    applicationUser: {
      email,
      token,
      isEmailConfirmed,
      isAuthenticated,
    },
  }
}

export const applicationUserLoggedOut = function ({ isAuthenticated }) {
  return {
    type: USER_LOGGED_OUT,
    applicationUser: {
      isAuthenticated,
    },
  }
}
