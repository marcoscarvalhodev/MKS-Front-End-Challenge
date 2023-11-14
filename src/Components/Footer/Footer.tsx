import React from 'react'
import { StyledFooter } from '../../Styles/Footer/Footer.styled'
import { StyledTexts } from '../../Styles/Reusable/Texts.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledTexts $size='p2'>MKS Sistemas © Todos os direitos reservados</StyledTexts>
    </StyledFooter>
  )
}

export default Footer