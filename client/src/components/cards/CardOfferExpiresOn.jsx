import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

const CardOfferExpiresOn = ({ expirationTime }) => (
  <CardOfferExpiresOnStyled className="CardOfferExpiresOn">
    <div className="offer-icon">
      <FontAwesomeIcon icon={faClock} />
    </div>
    <div className="offer-text">
      <div className="offer-text-text">oferta expira em:</div>
      <div className="offer-time">{expirationTime}</div>
    </div>
  </CardOfferExpiresOnStyled>
)

CardOfferExpiresOn.propTypes = {
  expirationTime: PropTypes.number.isRequired,
}

const CardOfferExpiresOnStyled = styled.div`
  background-color: var(--mainRed-1);
  color: var(--fullBlack);
  opacity: 0.9;

  width: calc(100% + 2.4rem);
  margin-left: -1.2rem;
  padding: 0.5rem 0 0.2rem;
  font-weight: 700;

  display: flex;

  .offer-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.3rem;
    width: 100px;
  }

  .offer-text {
    padding-left: 1rem;
  }

  .offer-text-text {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 900;
  }

  .offer-time {
    margin-top: -9px;
    font-size: 2rem;
    font-weight: 700;
  }
`

export default CardOfferExpiresOn
