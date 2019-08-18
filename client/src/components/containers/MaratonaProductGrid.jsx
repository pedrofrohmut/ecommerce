import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import MaratonaProductCard from "../cards/MaratonaProductCard"

const MaratonaProductGrid = ({ products }) => (
  <MaratonaProductGridStyled className="MaratonaProductGrid">
    {products.length > 0 && (
      <>
        <div className="product-grid">
          {products.map(product => (
            <MaratonaProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link to="products/maratona" className="maratona-link">
          Clique aqui e acesse a lista com todas as ofertas
        </Link>
      </>
    )}

    {products.length === 0 && <p>No products on the maratona at the moment</p>}
  </MaratonaProductGridStyled>
)

MaratonaProductGrid.propTypes = {
  products: PropTypes.arrayOf({
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      company: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

const MaratonaProductGridStyled = styled.div`
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    justify-items: center;
    grid-gap: 28px;
    margin-bottom: 1.5rem;
  }

  .maratona-link {
    color: var(--fullWhite);
    background-color: var(--mainRed-1);
    margin-bottom: 1rem;
    padding: 0.5rem 0.8rem;
    display: block;
    text-align: right;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`

export default MaratonaProductGrid
