import React, { useState } from 'react'
import { Stepper as MantineStepper } from '@mantine/core';

import { Container } from '../../../../components/Layout/styles'
import PersonalDataForm from './PersonalDataForm';
import { StepperWrapper } from './styles'
import BankCardForm from './BankCardForm';
import AddressForm from './AddressForm';

const Stepper = () => {
  const [active, setActive] = useState<number>(0);
  const [personalData, setPersonalData] = useState({});
  const [backData, setBankData] = useState({});
  const [addressData, setAddressData] = useState({});

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  console.log(
    { personalData },
    { backData },
    { addressData }
  )
  return (
    <Container>
      <StepperWrapper>
        <MantineStepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          breakpoint="sm"
        >
          <MantineStepper.Step label="1-ый шаг" description="Информация о покупателе">
            <PersonalDataForm setPersonalData={setPersonalData} nextStep={nextStep} />
          </MantineStepper.Step>
          <MantineStepper.Step label="2-ой шаг" description="Банковская карта">
            <BankCardForm setBankData={setBankData} nextStep={nextStep} />
          </MantineStepper.Step>
          <MantineStepper.Step label="3-ий шаг" description="Информация об адресе">
            <AddressForm setAddressData={setAddressData} nextStep={nextStep} />
          </MantineStepper.Step>
          <MantineStepper.Completed>
            ffef
          </MantineStepper.Completed>
        </MantineStepper>
      </StepperWrapper>
    </Container>
  )
}

export default Stepper