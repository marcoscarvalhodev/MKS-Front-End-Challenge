import React from 'react'
import { StyledHeader } from '../../Styles/Header/Header.styled';
import Nav from './Nav';

const Header = () => {
  return (
    <StyledHeader className='container'>
      <Nav />
    </StyledHeader>
  )
}

export default Header