import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types/applicationUser"

const INITIAL_STATE = {
  email: undefined,
  token: undefined,
  isConfirmed: undefined,
  isAuthenticated: false,
}

function applicationUserReducer(state = INITIAL_STATE, action) {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...newState, ...action.applicationUser }
    case USER_LOGGED_OUT:
      return { ...newState, ...action.applicationUser }
    default:
      return newState
  }
}

export default applicationUserReducer
