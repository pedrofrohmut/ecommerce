import React, { useState, useEffect } from "react"
import styled from "styled-components"
import api from "../api/api"

import ProductList from "../components/containers/ProductList"

import PageContainer from "../components/globals/PageContainer"
import ListTitle from "../components/globals/titles/ListTitle"

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.products.getAll().then(fetchedProducts => setProducts(fetchedProducts))
  }, [])

  return (
    <HomePageStyled className="HomePage">
      <PageContainer>
        <ListTitle text="Ofertas em destaque" />
        <ProductList products={products} />
      </PageContainer>
    </HomePageStyled>
  )
}
const HomePageStyled = styled.div``

export default HomePage
