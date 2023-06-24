import React from 'react'

import { useGetAllProductsQuery } from '../../../../store/apis/products'
import { Container } from '../../../../components/Layout/styles'
import Loader from '../../../../components/Loader'
import Categories from './Categories'
import Title from './Title'
import Item from './Item'
import { ListItemWrapper, ListItemGrid } from './styles'

const ListItem = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();

  return (
    <Container>
      <ListItemWrapper>
        <Title />
        <Categories currentCategory={''} />
        <ListItemGrid>
          {!isLoading && products ?
            products.map((product) => (<Item key={product.id} product={product} />))
            : <Loader isCentered />}
        </ListItemGrid>
      </ListItemWrapper>
    </Container>
  )
}

export default ListItem