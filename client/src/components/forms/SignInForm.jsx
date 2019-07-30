import React, { useState } from "react"
import styled from "styled-components"
import validator from "validator"
import PropTypes from "prop-types"

import Form from "../globals/forms/Form"
import FormGroup from "../globals/forms/FormGroup"
import InlineError from "../globals/messages/InlineError"
import AlertError from "../globals/messages/AlertError"

const isValidEmail = email =>
  email !== "" && typeof email === "string" && validator.isEmail(email)

const isValidPassword = password =>
  password !== ""
  && typeof password === "string"
  && password.length > 3
  && password.length <= 20

const INITIAL_ERRORS = {
  email: "",
  password: "",
  global: "",
}

const getFormErrors = (data) => {
  const email = isValidEmail(data.email) ? "" : "E-mail address is invalid"
  const password = isValidPassword(data.password) ? "" : "Password is invalid"

  return {
    email,
    password,
  }
}

const isValidForm = ({ email, password }) => email === "" && password === ""

const SignInForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState(INITIAL_ERRORS)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      email,
      password,
    }
    const formErrors = getFormErrors(formData)
    setErrors({ ...errors, ...formErrors })
    if (isValidForm(formErrors)) {
      onSubmit({ email, password }).catch((err) => {
        setErrors({ ...errors, global: err.response.data.errors.global })
      })
    }
  }

  return (
    <SignInFormStyled className="SignInForm">
      <h1>Sign In Form</h1>

      <Form onSubmit={handleSubmit}>
        {errors.global !== "" && <AlertError text={errors.global} />}

        <FormGroup>
          <label htmlFor="email">E-mail</label>
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
          <label htmlFor="password">Password</label>
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
          <button type="submit">Sign In</button>
        </FormGroup>
      </Form>
    </SignInFormStyled>
  )
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

const SignInFormStyled = styled.div`
  .AlertError {
    margin: 10px 0 6px;
  }

  button[type="submit"] {
    margin-top: 10px;
  }

  label {
    padding-top: 2px;
  }
`

export default SignInForm
