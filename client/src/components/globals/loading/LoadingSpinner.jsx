import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog } from "@fortawesome/free-solid-svg-icons"

const LoadingSpinner = ({ text }) => (
  <LoadingSpinnerStyled className="LoadingSpinner">
    <FontAwesomeIcon icon={faCog} spin size="8x" />
    <div className="loading-text">{text}</div>
  </LoadingSpinnerStyled>
)

LoadingSpinner.propTypes = {
  text: PropTypes.string,
}

LoadingSpinner.defaultProps = {
  text: "Loading...",
}

const LoadingSpinnerStyled = styled.div`
  margin: 0 auto;
  max-width: 364px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .fa-spin {
    animation-duration: 3.3s;
    margin-bottom: 2rem;
  }
`

export default LoadingSpinner
