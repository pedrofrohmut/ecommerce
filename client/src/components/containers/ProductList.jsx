import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import ProductCard from "../cards/ProductCard"

const ProductList = ({ products }) => (
  <ProductListStyled className="ProductList">
    {products.length > 0 && (
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-list-item">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    )}

    {products.length === 0 && <p>No products to display at the moment.</p>}
  </ProductListStyled>
)

ProductList.propTypes = {
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

const ProductListStyled = styled.div`
  .product-list {
    margin: 0 auto;
  }

  .product-list-item {
    border: 1px blue dashed;
    display: block;
    width: 100%;
    max-width: 364px;
    margin: 0 auto 25px;
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

export default ProductList
