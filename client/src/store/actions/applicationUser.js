import { USER_LOGGED_IN } from "../types/applicationUser"

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
