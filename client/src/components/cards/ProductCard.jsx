import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"
import { faCartPlus, faPlus } from "@fortawesome/free-solid-svg-icons"

import { limitText } from "../../utils/format"

import CardImage from "../globals/images/CardImage"
import CardStars from "../globals/stars/CardStars"
import CardPrice from "./CardPrice"
import TagList from "./TagList"
import IconButton from "../globals/buttons/IconButton"

const ProductCard = ({ product }) => {
  const {
    id, title, image, price, company, info,
  } = product

  // Testing Variables
  const stars = Math.floor(Math.random() * 10 + 1) / 2
  const oldPrice = price * 1.2
  const parcelNum = 12
  const parcelVal = price / 12
  const discount = 10
  const tags = [
    {
      href: "/products/phone",
      text: "phones",
    },
    {
      href: "products/smartphones/",
      text: "smartphones",
    },
  ]

  const handleComprar = () => {
    // TODO: comprar passando id
  }

  const handleDetails = () => {
    // TODO: redirect to product/details/{id}
  }

  return (
    <ProductCardStyled className="ProductCard">
      <CardImage src={image} />
      <div className="card-title">{title}</div>
      <div className="card-company">{company}</div>
      <div className="card-info">{limitText(info, 240, true)}</div>
      <CardStars num={stars} />
      <CardPrice
        oldPrice={oldPrice}
        price={price}
        parcelNum={parcelNum}
        parcelVal={parcelVal}
        discount={discount}
      />
      <div className="buttons">
        <IconButton icon={faCartPlus} onClick={handleComprar} text="Comprar" />
        <IconButton icon={faPlus} onClick={handleDetails} text="Detalhes" />
      </div>
      <TagList tags={tags} />
    </ProductCardStyled>
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
  padding: 1.2rem;
  max-width: 450px;
  border: 1px solid var(--grey6);
  border-radius: 0.3em;

  .CardImage {
    width: 50%;
    margin: 0 auto 12px;
  }

  .card-title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 3px;
    height: 50px;
  }

  .card-company {
    font-size: 0.8rem;
    color: var(--grey5);
    font-weight: 500;
    margin-bottom: 3px;
  }

  .card-info {
    font-size: 0.75rem;
    color: var(--grey4);
    font-weight: 300;
    text-align: justify;
    margin-bottom: 3px;
    height: 100px;
    overflow-y: hidden;
  }

  .CardStars {
    margin-bottom: 3px;
  }

  .CardPrice {
    margin-bottom: 13px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .TagList {
    margin-top: 6px;
  }
`

export default ProductCard
