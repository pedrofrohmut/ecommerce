import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

const MaratonaCardButtonComprar = ({ onClick }) => (
  <MaratonaCardButtonComprarStyled
    onClick={onClick}
    className="MaratonaCardButtonComprar"
  >
    <div className="btn-icon">
      <FontAwesomeIcon icon={faCartPlus} />
    </div>
    <div className="btn-text">Comprar</div>
  </MaratonaCardButtonComprarStyled>
)

MaratonaCardButtonComprar.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const MaratonaCardButtonComprarStyled = styled.button`
  color: var(--fullWhite);
  background-color: var(--mainRed-1);
  opacity: 0.85;

  padding: 0;
  border: 0;
  border-radius: 0.5em;
  width: 100%;
  display: flex;

  .btn-icon,
  .btn-text {
    padding: 11px 15px 10px 16px;
    font-size: 1.3rem;
    text-align: center;
  }

  .btn-icon {
    background-color: var(--fullBlack);
    border-radius: 0.3em 0 0 0.3em;
    border: 1px solid var(--mainBlue);
  }

  .btn-text {
    border-radius: 0 0.3em 0.3em 0;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
  }
`

export default MaratonaCardButtonComprar
