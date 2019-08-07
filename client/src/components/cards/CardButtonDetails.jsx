import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const CardButtonDetails = ({ onClick }) => (
  <CardButtonDetailsStyled onClick={onClick} className="CardButtonDetails">
    <div className="details-icon">
      <FontAwesomeIcon icon={faPlus} />
    </div>
    <div className="details-text">Detalhes</div>
  </CardButtonDetailsStyled>
)

CardButtonDetails.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const CardButtonDetailsStyled = styled.button`
  padding: 0;
  border: 0;
  color: var(--fullWhite);
  background-color: var(--mainOrange);

  .details-icon {
    float: left;
    background-color: var(--mainOrange-3);
    padding: 8px 12px 7px 13px;
    border-radius: 0.3em 0 0 0.3em;
    border: 1px solid var(--mainOrange-3);
    font-size: 1.1rem;
  }

  .details-text {
    float: right;
    padding: 8px 12px 7px 13px;
    border-radius: 0 0.3em 0.3em 0;
  }
`

export default CardButtonDetails
