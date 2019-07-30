import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const AlertError = ({ text }) => (
  <AlertErrorStyled className="AlertError">{text}</AlertErrorStyled>
)

const AlertErrorStyled = styled.div`
  font-size: 1rem;
  padding: 8px 16px;
  color: var(--errorRed);
  background-color: var(--errorRedBackground);
  border: 1px solid transparent;
  border-radius: 0.3em;
`

AlertError.propTypes = {
  text: PropTypes.string.isRequired,
}

export default AlertError
