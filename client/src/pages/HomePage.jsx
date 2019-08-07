import React, { useState, useEffect } from "react"
import styled from "styled-components"
import api from "../api/api"

import ProductList from "../components/containers/ProductList"

import PageContainer from "../components/globals/containers/PageContainer"
import ListTitle from "../components/globals/titles/ListTitle"
import LoadingSpinner from "../components/globals/loading/LoadingSpinner"

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)

  useEffect(() => {
    api.products.getAll().then((fetchedProducts) => {
      setTimeout(() => {
        setProducts(fetchedProducts)
        setIsLoadingProducts(false)
      }, 250)
    })
  }, [])

  return (
    <HomePageStyled className="HomePage">
      <PageContainer>
        {isLoadingProducts && <LoadingSpinner text="Loading Products..." />}

        {!isLoadingProducts && (
          <>
            <ListTitle text="Ofertas em destaque" />
            <ProductList products={products} />
          </>
        )}
      </PageContainer>
    </HomePageStyled>
  )
}
const HomePageStyled = styled.div``

export default HomePage
