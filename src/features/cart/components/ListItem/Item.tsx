import React from 'react'
import { Group } from '@mantine/core'
import { IconMinus, IconPlus } from '@tabler/icons-react';

import { Cart } from '../../../../store/slices/products/types'
import { addToCart, deleteFromCart } from '../../../../store/slices/products';
import { showStarsByRating } from '../../../../utils/showStarsByRating'
import { useAppDispatch } from '../../../../lib/useAppDispatch';
import {
  Button,
  ButtonGroup,
  ListItemGrid,
  ItemImgWrapper,
  ItemInfoStack,
  ItemInfoWrapper,
  ItemName,
  ItemPrice,
  ItemQuantity,
  Star
} from './styles'

interface Props {
  item: Cart
}

const Item = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  const { id, rating, image, title, price, quantity } = item;

  const rate = showStarsByRating(rating.rate)

  const totalPrice = quantity ? (price * quantity).toFixed(2) : 0;

  return (
    <ListItemGrid>
      <ItemInfoWrapper>
        <ItemImgWrapper>
          <img src={image} alt={title} />
        </ItemImgWrapper>

        <ItemInfoStack>
          <ItemName>{title}</ItemName>
          <Group spacing={4} position="center">
            {rate.map((it, idx) =>
              <Star key={`${it}-${idx}`} />
            )}
          </Group>
        </ItemInfoStack>
      </ItemInfoWrapper>

      <ItemPrice>
        $&nbsp;{price}
      </ItemPrice>

      <ButtonGroup>
        <Button onClick={() => dispatch(deleteFromCart(id))} type="button">
          <IconMinus />
        </Button>
        {quantity && <ItemQuantity>{quantity}</ItemQuantity>}
        <Button onClick={() => dispatch(addToCart(item))} type="button">
          <IconPlus />
        </Button>
      </ButtonGroup>

      <ItemPrice>
        $&nbsp;{totalPrice}
      </ItemPrice>
    </ListItemGrid>
  )
}

export default Item