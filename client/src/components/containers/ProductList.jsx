import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import ProductCard from "../cards/ProductCard"

const ProductList = ({ products }) => (
  <ProductListStyled className="ProductList">
    {products.length > 0 && (
      <ul>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
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

const ProductListStyled = styled.div``

export default ProductList
