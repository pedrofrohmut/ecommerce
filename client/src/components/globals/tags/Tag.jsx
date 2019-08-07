import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Tag = ({ href, text }) => (
  <TagStyled className="Tag">
    +
    {" "}
    <Link to={href}>{text}</Link>
  </TagStyled>
)

Tag.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const TagStyled = styled.span`
  font-size: 0.75rem;
  padding: 0 0 0 8px;
`

export default Tag
