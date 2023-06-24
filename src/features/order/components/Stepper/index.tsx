import { useState } from 'react';
import { Center, Stack, Stepper as MantineStepper } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { Paths } from '../../../../config/paths';
import { setCart } from '../../../../store/slices/products';
import { useAppSelector } from '../../../../lib/useAppSelector';
import { useAppDispatch } from '../../../../lib/useAppDispatch';
import { maskBankCard } from '../../../../utils/maskBankCard';
import { Container } from '../../../../components/Layout/styles';
import PersonalDataForm, { PersonalDataValues } from './PersonalDataForm';
import BankCardForm, { BankCardValues } from './BankCardForm';
import AddressForm from './AddressForm';
import { BackButton, ResultTitle, StepperWrapper } from './styles';

const Stepper = () => {
  const [active, setActive] = useState<number>(0);
  const [personalData, setPersonalData] = useState<PersonalDataValues | null>(
    null
  );
  const [bankData, setBankData] = useState<BankCardValues | null>(null);
  const [addressData, setAddressData] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store.product);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));

  const totalPrice = cart
    ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    : 0;

  const navigateBack = () => {
    navigate(Paths.MAIN);
    dispatch(setCart([]));
  };

  return (
    <Container>
      <StepperWrapper>
        <MantineStepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          breakpoint="sm"
        >
          <MantineStepper.Step
            label="1-ый шаг"
            description="Информация о покупателе"
          >
            <PersonalDataForm
              setPersonalData={setPersonalData}
              nextStep={nextStep}
            />
          </MantineStepper.Step>
          <MantineStepper.Step label="2-ой шаг" description="Банковская карта">
            <BankCardForm setBankData={setBankData} nextStep={nextStep} />
          </MantineStepper.Step>
          <MantineStepper.Step
            label="3-ий шаг"
            description="Информация об адресе"
          >
            <AddressForm setAddressData={setAddressData} nextStep={nextStep} />
          </MantineStepper.Step>
          <MantineStepper.Completed>
            {personalData && addressData && bankData && (
              <Stack spacing={20} pt={25}>
                <Center>
                  <ResultTitle>
                    <strong>Чек</strong>
                  </ResultTitle>
                </Center>
                <Stack spacing={10}>
                  <ResultTitle>
                    <strong>Клиент:</strong> {personalData.firstName}&nbsp;
                    {personalData.lastName}
                  </ResultTitle>
                  <ResultTitle>
                    <strong>Почта:</strong> {personalData.email}
                  </ResultTitle>
                  <ResultTitle>
                    <strong>Телефон:</strong> {personalData.phone}
                  </ResultTitle>
                  <ResultTitle>
                    <strong>Адрес:</strong> {addressData}
                  </ResultTitle>
                </Stack>
                <ResultTitle>
                  <strong>
                    Будет списано:&nbsp;
                    <span className="price">${totalPrice}</span>
                  </strong>
                  &nbsp; с счёта {maskBankCard(bankData.cardNumber)}
                </ResultTitle>
                <Center>
                  <BackButton onClick={navigateBack} type="button">
                    Назад
                  </BackButton>
                </Center>
              </Stack>
            )}
          </MantineStepper.Completed>
        </MantineStepper>
      </StepperWrapper>
    </Container>
  );
};

export default Stepper;
