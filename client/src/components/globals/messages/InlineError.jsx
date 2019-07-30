import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const InlineError = ({ text }) => (
  <InlineErrorStyled className="InlineError">{text}</InlineErrorStyled>
)

const InlineErrorStyled = styled.div`
  font-size: 0.9rem;
  padding: 6px 6px 0px;
  color: var(--errorRed);
  background-color: var(--fullWhite);
`

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
}

export default InlineError
