import { Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../../lib/useAppSelector';
import { Paths } from '../../../../config/paths';
import { FooterTitle, FooterWrapper, PaymentBtn, TotalPrice } from './styles';

const Footer = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((store) => store.product);

  const totalPrice = cart
    ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    : 0;

  return (
    <FooterWrapper>
      <Group position="apart">
        <FooterTitle>ИТОГО</FooterTitle>
        <TotalPrice>$&nbsp;{totalPrice}</TotalPrice>
      </Group>

      <Group position="right">
        <PaymentBtn onClick={() => navigate(Paths.ORDER)} type="button">
          Оплатить
        </PaymentBtn>
      </Group>
    </FooterWrapper>
  );
};

export default Footer;
