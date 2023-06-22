import styled from 'styled-components';

export const FormWrapper = styled.form`
  padding: 40px 30px;
  ${({ theme }) => theme.mixins.column};
  gap: 25px;
`;

export const Button = styled.button`
  height: 40px;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: 12px;
  font-weight: 400;
  color: var(--white);
  text-transform: uppercase;
  padding: 15px;
  border: 1px solid var(--white-blue);
  background-color: var(--white-blue);
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--white-blue);
    background-color: transparent;
  }
`;
