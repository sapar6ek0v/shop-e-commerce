import React from 'react'
import { NavLink } from 'react-router-dom';

import whiteLogo from '../../../assets/white-logo.svg';
import { Paths } from '../../../config/paths';
import { Container } from '../styles';
import { Description, FooterStack, FooterWrapper } from './styles'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterStack>
          <NavLink to={Paths.MAIN}>
            <img src={whiteLogo} alt="company-logo" />
          </NavLink>
          <Description>
            Shopin — это новая трендовая одежда из хороших материалов и по доступной цене.
          </Description>
        </FooterStack>
      </Container>
    </FooterWrapper>
  )
}

export default Footer