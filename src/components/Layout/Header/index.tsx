import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { IconShoppingCart } from '@tabler/icons-react';

import logo from '../../../assets/black-logo.png';
import { Paths } from '../../../config/paths';
import { useAppSelector } from '../../../lib/useAppSelector';
import { Container } from '../styles'
import { Button, HeaderApartContainer, HeaderWrapper, QuantityCounter } from './styles'

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((store) => store.product);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderApartContainer>
          <NavLink to={Paths.MAIN}>
            <img src={logo} alt="company-logo" />
          </NavLink>

          <Button onClick={() => navigate(Paths.CART)} type="button">
            <IconShoppingCart />
            {cart && cart.length > 0 && <QuantityCounter>{cart.length}</QuantityCounter>}
          </Button>
        </HeaderApartContainer>
      </Container>
    </HeaderWrapper>
  )
}

export default Header