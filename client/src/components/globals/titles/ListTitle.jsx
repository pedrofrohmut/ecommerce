import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ListTitle = ({ text }) => <ListTitleStyled>{text}</ListTitleStyled>

ListTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

const ListTitleStyled = styled.div`
  color: var(--mainBlue);
  font-size: 1.35rem;
  font-weight: 600;
  padding: 6px 0 12px;
`

export default ListTitle
