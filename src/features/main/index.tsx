import React from 'react'
import SEO from '../../components/SEO'
import { Paths } from '../../config/paths'
import ListItem from './components/ListItem'

const Main = () => {
  return (
    <>
      <SEO
        title="Главная"
        description="Главная страница нашего интернет-магазина, где вы найдете широкий ассортимент товаров. Мы предлагаем сортировку по цене и по названию, чтобы вы могли легко найти то, что вам нужно."
        keywords="интернет-магазин, товары, сортировка, цена, название."
        name="shop-e-commerce"
        type="web-application"
        href={Paths.MAIN}
      />
      <ListItem />
    </>
  )
}

export default Main