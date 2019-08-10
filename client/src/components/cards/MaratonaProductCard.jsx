import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import CardImage from "../globals/images/CardImage"
import CardOfferExpiresOn from "./CardOfferExpiresOn"

const MarantonaProductCard = ({ product }) => {
  const {
    id, title, image, price, company, info,
  } = product

  // Testing Variables
  const expirationTime = Math.floor(Math.random() * 200000)

  return (
    <MarantonaProductCardStyled className="MarantonaProductCard">
      <CardImage src={image} />
      <CardOfferExpiresOn expirationTime={expirationTime} />
    </MarantonaProductCardStyled>
  )
}

MarantonaProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
}

const MarantonaProductCardStyled = styled.div`
  padding: 1.2rem;
  max-width: 450px;
  border: 2px solid var(--mainRed);
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

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }
`

export default MarantonaProductCard
