import React from 'react';
import { Stack } from '@mantine/core';

import { Container } from '../../../../components/Layout/styles';
import { Paths } from '../../../../config/paths';
import { useCart } from '../../lib/useCart';
import Header from './Header';
import Footer from './Footer';
import Item from './Item';
import { BackLink, ListItemWrapper } from './styles';

const ListItem = () => {
  const { cart } = useCart();

  return (
    <Container>
      <ListItemWrapper>
        {cart && cart.length > 0 ?
          <>
            <Stack spacing={0}>
              <Header />
              {cart.map((item) => (<Item key={item.id} item={item} />))}
            </Stack>

            <Footer />
          </> :
          <BackLink to={Paths.MAIN}>Корзина пуста!</BackLink>
        }
      </ListItemWrapper>
    </Container>
  )
}

export default ListItem