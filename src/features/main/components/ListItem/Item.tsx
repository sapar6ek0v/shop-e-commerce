import React from 'react'
import { Group } from '@mantine/core';

import { Product } from '../../../../store/apis/products/types'
import { useAppDispatch } from '../../../../lib/useAppDispatch';
import { addToCart } from '../../../../store/slices/products';
import {
  ItemImgWrapper,
  ItemInfoStack,
  ItemHover,
  ItemHotAndSale,
  ItemAddBtn,
  ItemName,
  ItemPrice,
  ItemWrapper,
  Star
} from './styles';

interface Props {
  product: Product;
}

const Item = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const { rating, image, title, price } = product;
  const rate = [...Array(Math.round(rating.rate)).keys()];

  return (
    <ItemWrapper>
      <ItemImgWrapper>
        <img src={image} alt={title} />
        <ItemHover className='bgBlack' />
        <ItemHotAndSale className="hotAndSale">-65%</ItemHotAndSale>
        <ItemAddBtn
          onClick={() => dispatch(addToCart(product as any))}
          type="button"
          className="addBtn"
        >
          Добавить
        </ItemAddBtn>
      </ItemImgWrapper>

      <ItemInfoStack>
        <div>
          <ItemName to="#">{title}</ItemName>
          <Group spacing={4} position="center">
            {rate.map((it, idx) =>
              <Star key={`${it}-${idx}`} />
            )}
          </Group>
        </div>
        <ItemPrice>${price}</ItemPrice>
      </ItemInfoStack>
    </ItemWrapper>
  )
}

export default Item