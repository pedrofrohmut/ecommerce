import React from "react"
import styled from "styled-components"
import Form from "../components/globals/Form/Form"
import FormGroup from "../components/globals/Form/FormGroup"

const SignUpForm = () => {
  const handleSubmit = () => {}

  return (
    <SignUpFormStyled>
      <h1>Sign Up Form Styled</h1>

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
