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
