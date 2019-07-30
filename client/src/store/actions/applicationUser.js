import api from "../../api/api"

export const signup = function (newUser) {
  return function () {
    return api.applicationUser.signup(newUser).then((applicationUser) => {
      /* eslint-disable-next-line no-console */
      console.log("Action Api Return", applicationUser)
    })
  }
}
