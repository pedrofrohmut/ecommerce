import React from "react"
import styled from "styled-components"

import PageContainer from "../components/globals/PageContainer"
import ListTitle from "../components/globals/titles/ListTitle"

const HomePage = () => (
  <HomePageStyled>
    <PageContainer>
      <ListTitle text="Ofertas em destaque" />
    </PageContainer>
  </HomePageStyled>
)

const HomePageStyled = styled.div``

export default HomePage
