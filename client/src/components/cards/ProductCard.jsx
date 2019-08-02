import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"

import CardImage from "../globals/images/CardImage"
import CardStars from "../globals/stars/CardStars"
import CardPrice from "./CardPrice"
import CardButtonComprar from "./CardButtonComprar"
import CardButtonDetails from "./CardButtonDetails"
import CardTags from "./CardTags"

const ProductCard = ({ product }) => {
  const {
    id, title, image, price, company, info,
  } = product
  return (
    <Link to={`products/detail/${id}`}>
      <ProductCardStyled className="ProductCard">
        <CardImage src={image} />
        <div className="card-title">{title}</div>
        <div className="card-company">{company}</div>
        <div className="card-info">{info}</div>
        <CardStars num={5} />
        <CardPrice price={price} />
        <CardButtonComprar />
        <CardButtonDetails />
        <CardTags product={product} />
      </ProductCardStyled>
    </Link>
  )
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
}

const ProductCardStyled = styled.div`
  max-width: 480px;
  border: 1px solid var(--grey6);
  border-radius: 0.3em;
`

export default ProductCard
