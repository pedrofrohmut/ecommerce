import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import MaratonaProductCard from "../cards/MaratonaProductCard"

const MaratonaProductList = ({ products }) => (
  <MaratonaProductListStyled className="MaratonaProductList">
    {products.length > 0 && (
      <>
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-list-item">
              <MaratonaProductCard product={product} />
            </li>
          ))}
        </ul>

        <Link to="products/maratona" className="maratona-link">
          Clique aqui e acesse a lista com todas as ofertas
        </Link>
      </>
    )}

    {products.length === 0 && <p>No products on the maratona at the moment.</p>}
  </MaratonaProductListStyled>
)

MaratonaProductList.propTypes = {
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

const MaratonaProductListStyled = styled.div`
  .product-list {
    margin: 0 auto;
  }

  .product-list-item {
    display: block;
    width: 100%;
    max-width: 364px;
    margin: 0 auto 25px;
  }

  .maratona-link {
    color: var(--fullWhite);
    background-color: var(--mainRed-1);
    width: calc(100% - 2.6rem);
    margin-left: 1.3rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.8rem;
    display: block;
    clear: both;
    text-align: right;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (min-width: 480px) {
    .product-list-item {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .product-list-item {
      float: left;
      width: 47%;
      margin-left: 20px;
    }
  }

  @media (min-width: 1200px) {
    .product-list-item {
      width: 31%;
    }
  }
`

export default MaratonaProductList
