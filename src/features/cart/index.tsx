import React from 'react';
import SEO from '../../components/SEO';
import { Paths } from '../../config/paths';
import ListItem from './components/ListItem';

const Cart = () => {
  return (
    <>
      <SEO
        title="Корзина"
        description="Страница корзины"
        keywords=""
        name=""
        type=""
        href={Paths.CART}
      />
      <ListItem />
    </>
  )
}

export default Cart