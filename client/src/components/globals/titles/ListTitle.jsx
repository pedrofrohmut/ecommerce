import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ListTitle = ({ text, red }) => (
  <ListTitleStyled red={red}>{text}</ListTitleStyled>
)

ListTitle.propTypes = {
  text: PropTypes.string.isRequired,
  red: PropTypes.bool,
}

ListTitle.defaultProps = {
  red: false,
}

const ListTitleStyled = styled.div`
  color: ${props => (props.red ? "var(--mainRed)" : "var(--mainBlue)")};
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.2;
  padding-left: 30px;
  border-bottom: 2px solid var(--grey7);
  margin-bottom: 1.4rem;
`

export default ListTitle
