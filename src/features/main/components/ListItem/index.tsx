import React from 'react'

import { Container } from '../../../../components/Layout/styles'
import Loader from '../../../../components/Loader'
import { useProducts } from '../../lib/useProducts'
import Categories from './Categories'
import Title from './Title'
import Item from './Item'
import { ListItemWrapper, ListItemGrid } from './styles'

const ListItem = () => {
  const { products, isLoading } = useProducts();

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