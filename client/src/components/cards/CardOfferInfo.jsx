import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const CardOfferInfo = ({ discount, amount }) => (
  <CardOfferInfoStyled className="CardOfferInfo">
    <div className="offer-info-discount">
      <div className="label">desconto</div>
      <div className="value">{`${discount}%`}</div>
    </div>
    <div className="offer-info-amount">
      <div className="label">quantidade</div>
      <div className="value">{amount}</div>
    </div>
  </CardOfferInfoStyled>
)

CardOfferInfo.propTypes = {
  discount: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
}

const CardOfferInfoStyled = styled.div`
  background-color: var(--fullBlack);
  opacity: 0.85;
  margin-left: -1.2rem;
  width: calc(100% + 2.4rem);
  padding: 0.5rem 0 0.2rem;
  display: flex;
  justify-content: space-around;
  text-align: center;

  .offer-info-discount,
  .offer-info-amount {
    display: flex;
    flex-direction: column;
  }

  .label {
    color: var(--mainRed);
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 1px;
    font-size: 0.7rem;
  }

  .value {
    display: inline;
    margin-top: -9px;
    color: var(--fullWhite);
    font-size: 2.1rem;
    font-weight: 600;
  }
`

export default CardOfferInfo
