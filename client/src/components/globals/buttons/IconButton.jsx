import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconButton = ({
  icon,
  text,
  iconColor,
  iconBackground,
  background,
  color,
  onClick,
}) => (
  <IconButtonStyled
    className="IconButton"
    iconColor={iconColor}
    iconBackground={iconBackground}
    background={background}
    color={color}
    onClick={onClick}
  >
    <div className="btn-icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <span className="btn-text">{text}</span>
  </IconButtonStyled>
)

IconButton.propTypes = {
  /* eslint-disable-next-line */
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  iconBackground: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

IconButton.defaultProps = {
  iconColor: "var(--fullWhite)",
  iconBackground: "var(--mainBlue)",
  background: "var(--mainOrange)",
  color: "var(--mainWhite)",
}

const IconButtonStyled = styled.button`
  color: ${props => props.color};
  background-color: ${props => props.background};
  opacity: 0.85;

  padding: 0;
  border: 0;
  border-radius: 0.5em;
  height: 47px;
  width: 150px;

  display: flex;
  align-items: center;

  .btn-icon,
  .btn-text {
    text-align: center;
  }

  .btn-icon {
    padding: 13px 15px 12px;
    background-color: ${props => props.iconBackground};
    color: ${props => props.iconColor};
    border-radius: 0.3em 0 0 0.3em;
  }

  .btn-text {
    width: 100%;
    border-radius: 0 0.3em 0.3em 0;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1rem;
  }
`

export default IconButton
