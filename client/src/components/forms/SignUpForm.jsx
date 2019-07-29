import React, { useState } from "react"
import styled from "styled-components"
import Form from "../globals/Form/Form"
import FormGroup from "../globals/Form/FormGroup"

const SignUpForm = () => {
  const [username, setUsername] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirPassword] = useState("")

  const handleSubmit = () => {}

  return (
    <SignUpFormStyled>
      <h1>Sign Up Form</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label>User Name</label>
          <input type="text" />
        </FormGroup>

        <FormGroup>
          <label>Full Name</label>
          <input type="text" />
        </FormGroup>

        <FormGroup>
          <label>E-mail</label>
          <input type="text" />
        </FormGroup>

        <FormGroup>
          <label>Password</label>
          <input type="password" />
        </FormGroup>

        <FormGroup>
          <label>Confirm Password</label>
          <input type="password" />
        </FormGroup>

        <FormGroup>
          <button type="submit">Sign Up</button>
        </FormGroup>
      </Form>
    </SignUpFormStyled>
  )
}

const SignUpFormStyled = styled.div``

export default SignUpForm
