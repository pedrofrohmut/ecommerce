import axios from "axios"

export default {
  user: {
    register(newUser) {
      axios
        .post("/api/v1/application_users", { newUser })
        .then(response => response.data.user)
    },
  },
}
