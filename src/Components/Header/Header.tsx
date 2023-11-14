import React from 'react';
import { StyledHeader } from '../../Styles/Header/Header.styled';
import Nav from './Nav';
import ContainerSizes from '../../Hooks/ContainerSizes';

const Header = () => {
  const { small } = ContainerSizes();

  return (
    <StyledHeader $small={small} className='container'>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
