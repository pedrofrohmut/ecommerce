import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"

import CardImage from "../globals/images/CardImage"
import CardStars from "../globals/stars/CardStars"
import CardPrice from "./CardPrice"
// import CardButtonComprar from "./CardButtonComprar"
// import CardButtonDetails from "./CardButtonDetails"
// import CardTags from "./CardTags"

const ProductCard = ({ product }) => {
  const {
    id, title, image, price, company, info,
  } = product

  // Testing Variables
  const stars = 3.5
  const oldPrice = price * 1.2
  const parcelNum = 12
  const parcelVal = price / 12
  const discount = 10

  return (
    <Link to={`products/detail/${id}`}>
      <ProductCardStyled className="ProductCard">
        <CardImage src={image} />
        <div className="card-title">{title}</div>
        <div className="card-company">{company}</div>
        <div className="card-info">{info}</div>
        <CardStars num={stars} />
        <CardPrice
          oldPrice={oldPrice}
          price={price}
          parcelNum={parcelNum}
          parcelVal={parcelVal}
          discount={discount}
        />
        {/* <CardButtonComprar />
        <CardButtonDetails />
        <CardTags product={product} /> */}
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
  padding: 2rem;
  max-width: 480px;
  border: 1px solid var(--grey6);
  border-radius: 0.3em;

  .CardImage {
    width: 70%;
    margin: 0 auto 12px;
  }

  .card-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 7px;
  }

  .card-company {
    font-size: 1.1rem;
    color: var(--grey5);
    font-weight: 500;
    margin-bottom: 7px;
  }

  .card-info {
    font-size: 0.8rem;
    color: var(--grey4);
    font-weight: 300;
    text-align: justify;
    margin-bottom: 7px;
  }

  .CardStars {
    margin-bottom: 7px;
  }
`

export default ProductCard
