import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { formatMoney } from "../../utils/format"

const MaratonaCardPrice = ({ oldPrice, price, discount }) => (
  <MaratonaCardPriceStyled className="MaratonaCardPrice">
    <div className="old-price">{`De R$ ${formatMoney(oldPrice)} por`}</div>
    <div className="price">{`R$ ${formatMoney(price)}`}</div>
    <div className="parcel-info">
      {"À vista no boleto bancário com "}
      <strong>{`${discount}% de desconto`}</strong>
    </div>
  </MaratonaCardPriceStyled>
)

MaratonaCardPrice.propTypes = {
  oldPrice: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
}

const MaratonaCardPriceStyled = styled.div`
  .old-price {
    padding-left: 2px;
    font-size: 1.1rem;
    font-weight: 300;
    color: var(--grey4);
    margin-bottom: -13px;
  }

  .price {
    font-size: 2.1rem;
    font-weight: 700;
    color: var(--mainRed);
    margin-bottom: 0;
  }

  .parcel-info {
    font-size: 0.85rem;
    color: var(--grey4);
    font-weght: 300;
  }
`

export default MaratonaCardPrice
