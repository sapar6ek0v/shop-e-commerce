import { NavLink } from 'react-router-dom';

import logo from '../../../assets/white-logo.png';
import { Paths } from '../../../config/paths';
import { Container } from '../styles';
import { Description, FooterStack, FooterWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterStack>
          <NavLink to={Paths.MAIN}>
            <img src={logo} alt="company-logo" />
          </NavLink>
          <Description>
            Shopin — это новая трендовая одежда из хороших материалов и по
            доступной цене.
          </Description>
        </FooterStack>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
