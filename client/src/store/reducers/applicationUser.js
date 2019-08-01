import { USER_LOGGED_IN } from "../types/applicationUser"

const INITIAL_STATE = {
  email: undefined,
  token: undefined,
  isConfirmed: undefined,
}

function applicationUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, ...action.applicationUser }
    default:
      return state
  }
}

export default applicationUserReducer
