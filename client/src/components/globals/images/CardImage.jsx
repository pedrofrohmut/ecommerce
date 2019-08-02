import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const CardImage = ({ src }) => (
  <CardImageStyled className="CardImage">
    <img src={src} alt="prod-1" />
  </CardImageStyled>
)

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
}

const CardImageStyled = styled.div`
  img {
    margin: 0 auto;
    width: 100%;
  }
`

export default CardImage
