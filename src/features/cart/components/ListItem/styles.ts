import styled from 'styled-components';
import { IconJewishStar } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

export const ListItemWrapper = styled.div`
  min-height: 46.4vh;
  padding: 70px 0;
  ${({ theme }) => theme.mixins.column};
  gap: 50px;
`;

export const ListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  place-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--white-gray);
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  place-items: center;
  border-bottom: 1px solid var(--gray);
`;

export const HeaderTitle = styled.p`
  ${({ theme }) => theme.mixins.fs16};
  color: var(--dark-gray);
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  padding: 15px;
`;

export const ItemInfoWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.center};
  gap: 35px;
`;

export const ItemImgWrapper = styled.div`
  width: 100px;
  height: 120px;

  img {
    width: 100px;
    height: 100%;
    object-fit: contain;
  }
`;

export const ItemInfoStack = styled.div`
  ${({ theme }) => theme.mixins.column};
  align-items: flex-start;
  gap: 10px;
`;

export const ItemName = styled.span`
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 700;
  color: var(--black);
  ${({ theme }) => theme.mixins.oneLineText};
  text-align: left;
`;

export const Star = styled(IconJewishStar)`
  width: 17px;
  height: 17px;
  color: var(--yellow);
`;

export const ItemPrice = styled.span`
  ${({ theme }) => theme.mixins.fs20};
  color: var(--dark-gray);
`;

export const ButtonGroup = styled.div`
  width: 120px;
  height: 40px;
  ${({ theme }) => theme.mixins.apart};
  border: 1px solid var(--secondary-gray);
`;

export const Button = styled.button`
  width: 36px;
  height: 100%;
  ${({ theme }) => theme.mixins.fCenter};
  border: none;
  background: transparent;
  transition: var(--transition);

  svg {
    width: 20px;
    height: 20px;
    color: var(--black);
    transition: var(--transition);
  }

  &:is(:hover, :active, :focus) {
    outline: none;
    background: var(--dark-gray);

    svg {
      color: var(--white);
    }
  }
`;

export const ItemQuantity = styled.span`
  width: 50px;
  height: 100%;
  ${({ theme }) => theme.mixins.fCenter};
  ${({ theme }) => theme.mixins.fs20};
  color: var(--dark-gray);
  font-weight: 700;
`;

export const FooterWrapper = styled.div`
  ${({ theme }) => theme.mixins.column};
  gap: 20px;
  border: 1px solid var(--gray);
  padding: 15px;
`;

export const FooterTitle = styled.h6`
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 600;
  color: var(--dark-gray);
  text-transform: uppercase;
`;

export const TotalPrice = styled(FooterTitle)`
  font-weight: 400;
`;

export const PaymentBtn = styled.button`
  height: 40px;
  ${({ theme }) => theme.mixins.fs16};
  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid var(--white-blue);
  background: var(--white-blue);
  padding: 0 20px;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    color: var(--white-blue);
    background: transparent;
  }
`;

export const BackLink = styled(NavLink)`
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 600;
  color: var(--white-blue);
  text-decoration: underline;
  text-align: center;
`;
