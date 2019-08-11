import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { formatMoney } from "../../utils/format"

const CardPrice = ({
  oldPrice, price, discount, parcelNum, parcelVal,
}) => (
  <CardPriceStyled className="CardPrice">
    <div className="old-price">{`De R$ ${formatMoney(oldPrice)} por`}</div>
    <div className="price">{`R$ ${formatMoney(price)}`}</div>
    <div className="discount">
      {`a vista no boleto ${formatMoney(discount)}% de desconto`}
    </div>
    <div className="parcels">
      <div className="parcel-num-val">
        <div className="parcel-num">{`${parcelNum} X`}</div>
        <div className="parcel-val">{`R$ ${formatMoney(parcelVal)}`}</div>
      </div>
      <div className="parcel-info">sem juros no cartão</div>
    </div>
  </CardPriceStyled>
)

CardPrice.propTypes = {
  oldPrice: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  parcelNum: PropTypes.number.isRequired,
  parcelVal: PropTypes.number.isRequired,
}

const CardPriceStyled = styled.div`
  .old-price {
    padding-left: 2px;
    font-size: 1.1rem;
    font-weight: 300;
    color: var(--grey5);
    margin-bottom: -13px;
  }

  .price {
    font-size: 2.1rem;
    font-weight: 700;
    color: var(--mainBlue);
    margin-bottom: 0;
  }

  .discount {
    font-size: 0.7rem;
    color: var(--grey5);
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 3px;
  }

  .parcel-num-val {
    display: flex;
    align-items: center;
  }

  .parcel-num {
    color: var(--lightYellow);
    background-color: var(--mainBlue1);
    font-weight: 700;
    width: 20%;
    border-radius: 0.4em 0 0 0;
    text-align: center;
    font-size: 1rem;
    padding: 2px 0;
  }

  .parcel-val {
    font-weight: 700;
    color: var(--fullWhite);
    background-color: var(--mainBlue2);
    font-size: 1.1rem;
    padding: 1px 0 0 0;
    text-align: center;
    width: 80%;
    border-radius: 0 0.4em 0 0;
  }

  .parcel-info {
    font-size: 0.85rem;
    color: var(--grey5);
    font-weght: 300;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid var(--grey6);
    border-left: 1px solid var(--grey6);
    border-right: 1px solid var(--grey6);
    border-radius: 0 0 0.4em 0.4em;
  }
`

export default CardPrice
