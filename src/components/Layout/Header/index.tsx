import React from 'react'
import { NavLink } from 'react-router-dom';
import { IconShoppingCart } from '@tabler/icons-react';
import { UnstyledButton } from '@mantine/core';

import logo from '../../../assets/logo.svg';
import { Paths } from '../../../config/paths';
import { Container } from '../styles'
import { HeaderApartContainer, HeaderWrapper } from './styles'


const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderApartContainer>
          <NavLink to={Paths.MAIN}>
            <img src={logo} alt="company-logo" />
          </NavLink>

          <UnstyledButton>
            <IconShoppingCart />
          </UnstyledButton>
        </HeaderApartContainer>
      </Container>
    </HeaderWrapper>
  )
}

export default Header