import styled from 'styled-components';

export const Centered = styled.section`
  min-height: 100vh;
  ${({ theme }) => theme.mixins.fCenter};
`;

export const ContentWrapper = styled.div`
  width: 450px;
  background-color: var(--secondary-black);
`;

export const FormWrapper = styled.form`
  padding: 40px 30px;
  ${({ theme }) => theme.mixins.column};
  gap: 25px;
`;

export const WelcomeTitle = styled.h1`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.05em;
  text-align: center;
`;

export const Button = styled.button`
  height: 40px;
  ${({ theme }) => theme.mixins.fCenter};
  font-size: 12px;
  font-weight: 500;
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
