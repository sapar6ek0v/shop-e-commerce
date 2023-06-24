import styled from 'styled-components';

export const StepperWrapper = styled.div`
  min-height: 46.4vh;
  padding: 70px 0;
`;

const BaseFormWrapper = styled.form`
  width: 100%;
  ${({ theme }) => theme.mixins.column};
  gap: 30px;
  padding: 35px 0 20px;
`;

export const PersonalDataWrapper = styled(BaseFormWrapper)`
  align-items: center;
`;

export const PersonalDataGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const Button = styled.button`
  height: 40px;
  ${({ theme }) => theme.mixins.fs16};
  color: var(--white);
  font-weight: 500;
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

export const BankCardWrapper = styled(BaseFormWrapper)``;

export const BankCardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const AddressFormWrapper = styled(BaseFormWrapper)``;

export const ResultTitle = styled.p`
  ${({ theme }) => theme.mixins.fs16};
  color: var(--dark-gray);
  font-weight: 400;

  strong {
    text-transform: uppercase;
    font-weight: 600;
  }

  .price {
    font-style: italic;
    color: var(--white-blue);
  }
`;

export const BackButton = styled.button`
  height: 40px;
  ${({ theme }) => theme.mixins.fCenter};
  ${({ theme }) => theme.mixins.fs16};
  font-weight: 600;
  color: var(--white-blue);
  text-transform: uppercase;
  border: 1px solid var(--white-blue);
  background: transparent;
  transition: var(--transition);

  &:is(:hover, :active, :focus) {
    outline: none;
    color: var(--white);
    background: var(--white-blue);
  }
`;
