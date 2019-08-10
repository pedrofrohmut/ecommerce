import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const ListTitle = ({ text }) => <ListTitleStyled>{text}</ListTitleStyled>

ListTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

const ListTitleStyled = styled.div`
  color: var(--mainBlue);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.6;
  padding-left: 30px;
`

export default ListTitle
