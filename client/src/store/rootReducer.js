import { combineReducers } from "redux"

import applicationUserReducer from "./reducers/applicationUser"

const rootReducer = combineReducers({
  applicationUser: applicationUserReducer,
})

export default rootReducer
