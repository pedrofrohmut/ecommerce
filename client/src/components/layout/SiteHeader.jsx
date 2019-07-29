import React from "react"
import styled from "styled-components"

import Navbar from "../navigation/Navbar"

const SiteHeader = () => (
  <SiteHeaderStyled>
    Logo
    {" "}
    <br />
    Busca
    {" "}
    <br />
    UserManager
    {" "}
    <br />
    Carrinho
    <Navbar />
  </SiteHeaderStyled>
)

const SiteHeaderStyled = styled.div`
  margin-bottom: 25px;
`

export default SiteHeader
