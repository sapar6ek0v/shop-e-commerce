import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconJewishStarFilled } from '@tabler/icons-react';

export const ListItemWrapper = styled.div`
  padding: 70px 0;
  ${({ theme }) => theme.mixins.column};
  gap: 50px;
`;

export const ListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
`;

export const TitleGroup = styled.div`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
`;

export const TitleLogoWrapper = styled.div`
  padding: 0 5px;
  position: relative;
  z-index: 5;
  bottom: -1px;
`;

export const TitleText = styled.h1`
  font-size: 25px;
  line-height: 38px;
  font-weight: 700;
  word-break: break-word;
  text-transform: uppercase;

  &::before,
  &::after {
    display: block;
    content: '';
    height: 1px;
    width: 100%;
    background-color: var(--black);
    margin: auto;
  }
`;

export const CategoriesGroup = styled.ul`
  position: relative;
  min-height: 44px;
  ${({ theme }) => theme.mixins.fCenter};
`;

type CategoryProps = {
  $isActive: boolean;
};

export const CategoryItem = styled.li<CategoryProps>`
  cursor: pointer;
  color: ${(props) => (props.$isActive ? 'var(--white-blue)' : 'var(--dark-gray)')};
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 700;
  text-transform: uppercase;
  border-right: 1px solid var(--black);
  padding: 10px 25px;
  transition: var(--transition);

  &:last-child {
    border-right: none;
  }

  &:is(:hover, :active, :focus) {
    color: var(--white-blue);
  }
`;

export const ItemWrapper = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 18px;
`;

export const ItemImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:is(:hover, :focus, :active) {
    .bgBlack {
      opacity: 0.7;
      z-index: 1;
    }

    .hotAndSale {
      top: 15px;
      left: 15px;
    }

    .addBtn {
      opacity: 1;
    }
  }
`;

export const ItemHover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  opacity: 0;
  background: var(--black);
  transition: var(--transition);
`;

export const ItemHotAndSale = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 55px;
  height: 25px;
  ${({ theme }) => theme.mixins.fCenter};
  ${({ theme }) => theme.mixins.fs12};
  color: var(--white);
  font-weight: 600;
  background-color: var(--white-blue);
  transition: var(--transition);
`;

export const ItemAddBtn = styled.button`
  width: 80%;
  height: 40px;
  position: absolute;
  z-index: 1;
  opacity: 0;
  left: 50%;
  bottom: 15px;
  text-align: center;
  color: var(--white);
  text-transform: uppercase;
  border: 1px solid var(--white-blue);
  background-color: var(--white-blue);
  transform: translate(-50%);
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--white-blue);
    background-color: transparent;
  }
`;

export const ItemInfoStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  align-items: center;
  gap: 20px;
`;

export const ItemName = styled(Link)`
  width: 80%;
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 400;
  color: var(--dark-gray);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
  margin-inline: auto;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    color: var(--white-blue);
  }
`;

export const ItemPrice = styled.span`
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  color: var(--white-blue);
`;

export const Star = styled(IconJewishStarFilled)`
  width: 16px;
  height: 16px;
  color: var(--white-blue);
`;
