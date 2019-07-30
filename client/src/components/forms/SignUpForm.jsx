import React, { useState } from "react"
import styled from "styled-components"
import validator from "validator"

import Form from "../globals/Form/Form"
import FormGroup from "../globals/Form/FormGroup"
import InlineError from "../globals/messages/InlineError"

const isValidUsername = username =>
  username !== ""
  && typeof username === "string"
  && username.length > 2
  && username.length <= 20

const isValidFullname = fullname =>
  fullname !== ""
  && typeof fullname === "string"
  && fullname.length > 2
  && fullname.length <= 60

const isValidEmail = email =>
  email !== "" && typeof email === "string" && validator.isEmail(email)

const isValidPassword = password =>
  password !== ""
  && typeof password === "string"
  && password.length > 2
  && password.length <= 20

const doPasswordsMatch = (password1, password2) => password1 === password2

const INITIAL_ERRORS = {
  username: "",
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const getFormErrors = (data) => {
  const username = isValidUsername(data.username) ? "" : "Username is invalid"
  const fullname = isValidFullname(data.fullname) ? "" : "Fullname is invalid"
  const email = isValidEmail(data.email) ? "" : "E-mail Address is invalid"
  const password = isValidPassword(data.password) ? "" : "Password is invalid"
  const confirmPassword = !isValidPassword(data.confirmPassword)
    ? "Confirm Password is invalid"
    : doPasswordsMatch(data.password, data.confirmPassword)
      ? ""
      : "Password and confirm password do not match"

  return {
    username,
    fullname,
    email,
    password,
    confirmPassword,
  }
}

const isValidForm = ({
  username,
  fullname,
  email,
  password,
  confirmPassword,
}) =>
  username === ""
  && fullname === ""
  && email === ""
  && password === ""
  && confirmPassword === ""

const SignUpForm = () => {
  const [username, setUsername] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirPassword] = useState("")

  const [errors, setErrors] = useState(INITIAL_ERRORS)

  const handleSubmit = (e) => {
    const formData = {
      username,
      fullname,
      email,
      password,
      confirmPassword,
    }
    const formErrors = getFormErrors(formData)
    setErrors({ ...errors, ...formErrors })
    if (isValidForm(formErrors)) {
      console.log("VALID!!!")
    } else {
      console.log("Not valid")
    }
    e.preventDefault()
  }

  return (
    <SignUpFormStyled className="SignUpForm">
      <h1>Sign Up Form</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {errors.username !== "" && <InlineError text={errors.username} />}
        </FormGroup>

        <FormGroup>
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
          />
          {errors.fullname !== "" && <InlineError text={errors.fullname} />}
        </FormGroup>

        <FormGroup>
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="E-mail Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {errors.email !== "" && <InlineError text={errors.email} />}
        </FormGroup>

        <FormGroup>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {errors.password !== "" && <InlineError text={errors.password} />}
        </FormGroup>

        <FormGroup>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your Password Here"
            value={confirmPassword}
            onChange={e => setConfirPassword(e.target.value)}
          />
          {errors.confirmPassword !== "" && (
            <InlineError text={errors.confirmPassword} />
          )}
        </FormGroup>

        <FormGroup>
          <button type="submit">Sign Up</button>
        </FormGroup>
      </Form>
    </SignUpFormStyled>
  )
}

const SignUpFormStyled = styled.div`
  label {
    padding-top: 2px;
  }
`

export default SignUpForm
