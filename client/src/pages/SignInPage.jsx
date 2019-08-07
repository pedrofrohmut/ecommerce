import React from "react"
import { connect } from "react-redux"
import * as middleware from "../store/middleware/applicationUser"
import styled from "styled-components"
import PropTypes from "prop-types"

import PageContainer from "../components/globals/containers/PageContainer"

import SignInButtons from "../components/containers/SignInButtons"
import SignInForm from "../components/forms/SignInForm"

const SignInPage = ({ signin, history }) => {
  const handleSubmit = credentials =>
    signin(credentials).then(() => history.push("/"))

  return (
    <SignInPageStyled className="SignInPage">
      <PageContainer>
        <h1>Sign In Page</h1>
        <div className="columns">
          <div className="column-form">
            <SignInForm onSubmit={handleSubmit} />
          </div>
          <div className="column-buttons">
            <SignInButtons />
          </div>
        </div>
      </PageContainer>
    </SignInPageStyled>
  )
}

SignInPage.propTypes = {
  signin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

const SignInPageStyled = styled.div`
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
  { signin: middleware.signin },
)(SignInPage)
