import axios from "axios"

export const setAuthorizationHeaders = function (token = null) {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
}

export const deleteAuthorizationHeaders = function () {
  axios.defaults.headers.common.Authorization = ""
}
