import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { faCartPlus, faPlus } from "@fortawesome/free-solid-svg-icons"

import CardImage from "../globals/images/CardImage"
import CardOfferExpiresOn from "./CardOfferExpiresOn"
import CardOfferInfo from "./CardOfferInfo"
import MaratonaCardPrice from "./MaratonaCardPrice"
import IconButton from "../globals/buttons/IconButton"

const MarantonaProductCard = ({ product }) => {
  const {
    id, title, image, price,
  } = product

  // Testing Variables
  const expirationTime = Math.floor(Math.random() * 200000)
  const offerDiscount = Math.floor(Math.random() * 25 + 5)
  const offerAmount = Math.floor(Math.random() * 1200 + 25)
  const oldPrice = price * 1.2
  const newPrice = price * 0.8
  const discount = 15

  const handleComprar = () => {
    // TODO: maratona comprar passing id
  }

  const handleDetails = () => {
    // TODO: maratona details passing id
  }

  return (
    <MarantonaProductCardStyled className="MarantonaProductCard">
      <CardImage src={image} />
      <CardOfferExpiresOn expirationTime={expirationTime} />
      <CardOfferInfo discount={offerDiscount} amount={offerAmount} />
      <div className="card-title">{title}</div>
      <MaratonaCardPrice
        oldPrice={oldPrice}
        price={newPrice}
        discount={discount}
      />
      <div className="buttons">
        <IconButton
          icon={faCartPlus}
          iconBackground="var(--fullBlack)"
          background="var(--mainRed-1)"
          onClick={handleComprar}
          text="Comprar"
        />
        <IconButton
          icon={faPlus}
          iconBackground="var(--fullBlack)"
          background="var(--mainRed-1)"
          onClick={handleDetails}
          text="Detalhes"
        />
      </div>
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
  border: 2px solid var(--mainRed-1);
  border-radius: 0.3em;

  .CardImage {
    width: 50%;
    margin: 0 auto 12px;
    padding: 1rem 0 1.5rem;
  }

  .CardOfferInfo {
    margin-bottom: 0.8rem;
  }

  .card-title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 3px;
    height: 50px;
  }

  .MaratonaCardPrice {
    margin-bottom: 13px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`

export default MarantonaProductCard
