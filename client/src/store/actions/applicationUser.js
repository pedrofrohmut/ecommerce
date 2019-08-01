import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types/applicationUser"

export const applicationUserLoggedIn = function ({
  email,
  token,
  isEmailConfirmed,
}) {
  return {
    type: USER_LOGGED_IN,
    applicationUser: {
      email,
      token,
      isEmailConfirmed,
    },
  }
}

export const applicationUserLoggedOut = function () {
  return {
    type: USER_LOGGED_OUT,
  }
}
