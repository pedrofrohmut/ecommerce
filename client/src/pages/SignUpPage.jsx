import React from "react"
import { connect } from "react-redux"
import * as actions from "../store/actions/user"
import styled from "styled-components"
import SignUpForm from "../components/forms/SignUpForm"
import PageContainer from "../components/globals/PageContainer"
import PropTypes from "prop-types"

const SignUpPage = ({ signup, history }) => {
  const handleSubmit = newUser =>
    signup(newUser).then(() => history.push("/home"))

  return (
    <SignUpPageStyled>
      <PageContainer>
        <h1>Sign Up Page</h1>
        <SignUpForm onSubmit={handleSubmit} />
      </PageContainer>
    </SignUpPageStyled>
  )
}

SignUpPage.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

const SignUpPageStyled = styled.div``

export default connect(
  null,
  { signup: actions.signup },
)(SignUpPage)
