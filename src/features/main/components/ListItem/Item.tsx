import { Group } from '@mantine/core';

import { Product } from '../../../../store/apis/products/types';
import { useAppDispatch } from '../../../../lib/useAppDispatch';
import { addToCart } from '../../../../store/slices/products';
import { showStarsByRating } from '../../../../utils/showStarsByRating';
import {
  ItemImgWrapper,
  ItemInfoStack,
  ItemHover,
  ItemHotAndSale,
  ItemAddBtn,
  ItemName,
  ItemPrice,
  ItemWrapper,
  Star,
} from './styles';

interface Props {
  product: Product;
}

const Item = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const { rating, image, title, price } = product;
  const rate = showStarsByRating(rating.rate);

  return (
    <ItemWrapper>
      <ItemImgWrapper>
        <img src={image} alt={title} />
        <ItemHover className="bgBlack" />
        <ItemHotAndSale className="hotAndSale">-65%</ItemHotAndSale>
        <ItemAddBtn
          onClick={() => dispatch(addToCart(product))}
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
            {rate.map((it) => (
              <Star key={it} />
            ))}
          </Group>
        </div>
        <ItemPrice>$&nbsp;{price}</ItemPrice>
      </ItemInfoStack>
    </ItemWrapper>
  );
};

export default Item;
