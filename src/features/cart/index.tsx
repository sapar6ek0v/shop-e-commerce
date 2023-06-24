import React from 'react';
import SEO from '../../components/SEO';
import { Paths } from '../../config/paths';
import ListItem from './components/ListItem';

const Cart = () => {
  return (
    <>
      <SEO
        title="Корзина"
        description="Просмотрите краткую информацию о товарах, которые вы добавили в корзину. Мы предлагаем удобный функционал добавления товаров в корзину, чтобы вы могли легко отслеживать свои покупки."
        keywords="корзина, товары, покупки, добавление, информация."
        name="shop-e-commerce"
        type="web-application"
        href={Paths.CART}
      />
      <ListItem />
    </>
  )
}

export default Cart