import axios from "axios"

export default {
  applicationUser: {
    signup: newUser =>
      axios
        .post("http://localhost:5000/api/v1/application_users", { ...newUser })
        .then(response => response.data),

    signin: credentials =>
      axios
        .post("http://localhost:5000/api/v1/application_users/signin", {
          ...credentials,
        })
        .then(response => response.data),
  },
}
