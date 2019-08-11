import React from "react"
import { connect } from "react-redux"
import * as middleware from "../store/middleware/applicationUser"
import styled from "styled-components"
import PropTypes from "prop-types"

import PageContainer from "../components/globals/containers/PageContainer"

import SignUpBottons from "../components/containers/SignUpBottons"
import SignUpForm from "../components/forms/SignUpForm"

const SignUpPage = ({ signup, history }) => {
  const handleSubmit = newUser =>
    signup(newUser).then(() => history.push("/signin"))

  return (
    <SignUpPageStyled className="SignUpPage">
      <PageContainer>
        <h1>Sign Up Page</h1>
        <div className="columns">
          <div className="column-form">
            <SignUpForm onSubmit={handleSubmit} />
          </div>
          <div className="column-buttons">
            <SignUpBottons />
          </div>
        </div>
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

const SignUpPageStyled = styled.div`
  .columns {
    display: block;
  }

  .column-form {
    width: 100%;
  }

  .column-buttons {
    width: 100%;
  }

  @media (min-width: 768px) {
    .columns {
      display: flex;
      justify-content: center;
    }
  }
`

export default connect(
  null,
  { signup: middleware.signup },
)(SignUpPage)
