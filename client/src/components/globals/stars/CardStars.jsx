import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"

const getStars = (num) => {
  const floorNum = Math.floor(num)
  const rest = num - floorNum

  const stars = []
  for (let i = 0; i < floorNum; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} />)
  }
  if (rest > 0) {
    stars.push(<FontAwesomeIcon icon={faStarHalf} />)
  }
  return stars
}

const CardStars = ({ num }) => {
  const stars = getStars(num)
  return (
    <CardStarsStyled className="CardStars">
      {stars.length > 0 && (
        <ul>
          {stars.map((star, index) => (
            <li key={index}>{star}</li>
          ))}
        </ul>
      )}
    </CardStarsStyled>
  )
}

CardStars.propTypes = {
  num: PropTypes.number.isRequired,
}

const CardStarsStyled = styled.div`
  display: block;
  font-size: 1.3rem;

  li {
    display: inline-block;
    color: var(--mainOrange);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

export default CardStars
