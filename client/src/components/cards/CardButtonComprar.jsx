import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

const CardButtonComprar = ({ onClick }) => (
  <CardButtonComprarStyled onClick={onClick} className="CardButtonComprar">
    <div className="cart-icon">
      <FontAwesomeIcon icon={faCartPlus} />
    </div>
    <div className="cart-text">Comprar</div>
  </CardButtonComprarStyled>
)

CardButtonComprar.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const CardButtonComprarStyled = styled.button`
  padding: 0;
  border: 0;
  color: var(--fullWhite);
  background-color: var(--mainOrange);

  .cart-icon {
    float: left;
    background-color: var(--mainBlue);
    padding: 8px 12px 7px 13px;
    border-radius: 0.3em 0 0 0.3em;
    border: 1px solid var(--mainBlue);
    font-size: 1.1rem;
  }

  .cart-text {
    float: right;
    padding: 8px 12px 7px 13px;
    border-radius: 0 0.3em 0.3em 0;
  }
`

export default CardButtonComprar
