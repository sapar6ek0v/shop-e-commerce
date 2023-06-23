import React from 'react'
import { NavLink } from 'react-router-dom';
import { IconShoppingCart } from '@tabler/icons-react';
import { UnstyledButton } from '@mantine/core';

import logo from '../../../assets/logo.svg';
import { Paths } from '../../../config/paths';
import { Container } from '../styles'
import { HeaderApartContainer, HeaderWrapper } from './styles'
import { useAppSelector } from '../../../lib/useAppSelector';

const Header = () => {
  const { cart } = useAppSelector((store) => store.product);
  console.log({ cart });
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