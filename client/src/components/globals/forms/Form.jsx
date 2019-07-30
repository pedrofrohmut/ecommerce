import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Form = ({ onSubmit, children }) => (
  <FormStyled onSubmit={onSubmit}>{children}</FormStyled>
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
}

const FormStyled = styled.form`
  label {
    display: block;
    padding: 5px 0;
  }

  input {
    border-left: 10px solid var(--grey5);
  }
`

export default Form
