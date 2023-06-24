import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 90;
  background-color: var(--white);
`;

export const HeaderApartContainer = styled.div`
  ${({ theme }) => theme.mixins.apart};
  gap: 30px;
  padding: 25px 0;
`;

export const Button = styled.button`
  position: relative;
  border: none;
  background: transparent;
`;

export const QuantityCounter = styled.span`
  width: 18px;
  height: 18px;
  position: absolute;
  top: -5px;
  right: -5px;
  ${({ theme }) => theme.mixins.fCenter};
  ${({ theme }) => theme.mixins.fs12};
  font-weight: 400;
  color: var(--white);
  border-radius: 50%;
  background: var(--red);
`;

type SortButtonProps = {
  $isActive: boolean;
};

export const SortButton = styled.button<SortButtonProps>`
  color: ${(props) => (props.$isActive ? 'var(--white-blue)' : 'var(--black)')};
  ${({ theme }) => theme.mixins.fCenter};
  border: none;
  background: transparent;
  transition: all 0.4s linear;

  &:is(:hover, :active, :focus) {
    color: var(--white-blue);
    outline: none;
  }
`;
