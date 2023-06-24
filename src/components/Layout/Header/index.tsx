import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Group } from '@mantine/core';
import {
  IconShoppingCart,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
  IconSortAscendingNumbers,
  IconSortDescendingNumbers,
} from '@tabler/icons-react';

import logo from '../../../assets/black-logo.png';
import { Paths } from '../../../config/paths';
import { useAppSelector } from '../../../lib/useAppSelector';
import { useAppDispatch } from '../../../lib/useAppDispatch';
import { sortByName, sortByPrice } from '../../../store/slices/products';
import { Container } from '../styles';
import {
  Button,
  HeaderApartContainer,
  HeaderWrapper,
  QuantityCounter,
  SortButton,
} from './styles';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { cart, byName, byPrice, byPriceOrName } = useAppSelector(
    (store) => store.product
  );

  const isShowSortButtons = location.pathname !== Paths.ORDER;

  return (
    <HeaderWrapper>
      <Container>
        <HeaderApartContainer>
          <NavLink to={Paths.MAIN}>
            <img src={logo} alt="company-logo" />
          </NavLink>

          <Group spacing={20}>
            {isShowSortButtons && (
              <>
                <SortButton
                  onClick={() => dispatch(sortByPrice())}
                  $isActive={byPriceOrName > 0}
                  type="button"
                >
                  {byPrice > 0 ? (
                    <IconSortAscendingNumbers />
                  ) : (
                    <IconSortDescendingNumbers />
                  )}
                </SortButton>

                <SortButton
                  onClick={() => dispatch(sortByName())}
                  $isActive={byPriceOrName < 0}
                  type="button"
                >
                  {byName > 0 ? (
                    <IconSortAscendingLetters />
                  ) : (
                    <IconSortDescendingLetters />
                  )}
                </SortButton>
              </>
            )}

            <Button onClick={() => navigate(Paths.CART)} type="button">
              <IconShoppingCart />
              {cart && cart.length > 0 && (
                <QuantityCounter>{cart.length}</QuantityCounter>
              )}
            </Button>
          </Group>
        </HeaderApartContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
