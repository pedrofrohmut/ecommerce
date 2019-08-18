import React, { useState, useEffect } from "react"
import styled from "styled-components"
import api from "../api/api"
import { getRandomProducts } from "../utils/products"

import ProductGrid from "../components/containers/ProductGrid"
import MaratonaProductGrid from "../components/containers/MaratonaProductGrid"

import PageContainer from "../components/globals/containers/PageContainer"
import ListTitle from "../components/globals/titles/ListTitle"
import LoadingSpinner from "../components/globals/loading/LoadingSpinner"

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [maratonaProducts, setMaratonaProducts] = useState([])
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)

  useEffect(() => {
    api.products.getAll().then((fetchedProducts) => {
      setTimeout(() => {
        setMaratonaProducts(getRandomProducts(fetchedProducts, 3))
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
            <ListTitle text="Maratona" red />
            <MaratonaProductGrid products={maratonaProducts} />
            <ListTitle text="Ofertas em destaque" />
            <ProductGrid products={products} />
          </>
        )}
      </PageContainer>
    </HomePageStyled>
  )
}
const HomePageStyled = styled.div``

export default HomePage
