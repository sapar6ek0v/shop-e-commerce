import { Center } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

import MaskedTextInput from '../../../../components/Form/MaskedInputField';
import { RegEx } from '../../../../utils/regex';
import { BankCardWrapper, BankCardGrid, Button } from './styles';

const BankCardSchema = z.object({
  month: z.string().min(2, 'Пожалуйста, введите правильный формат месяца!'),
  year: z.string().min(4, 'Пожалуйста, введите правильный формат года!'),
  cvv: z
    .string()
    .regex(RegEx.cvv, 'Пожалуйста, введите правильный формат CVV!'),
  cardNumber: z
    .string()
    .regex(
      RegEx.cardNumber,
      'Пожалуйста, введите правильный формат номера карты!'
    ),
});

export type BankCardValues = z.infer<typeof BankCardSchema>;
interface Props {
  setBankData: (value: BankCardValues) => void;
  nextStep: () => void;
}

const BankCardForm = ({ setBankData, nextStep }: Props) => {
  const form = useForm<BankCardValues>({
    initialValues: {
      month: '',
      year: '',
      cvv: '',
      cardNumber: '',
    },
    validate: (values) => {
      const resolver = zodResolver(BankCardSchema);
      const errors = resolver(values);
      return errors;
    },
  });

  const handleSubmit = (values: BankCardValues) => {
    setBankData(values);
    nextStep();
  };

  return (
    <BankCardWrapper onSubmit={form.onSubmit(handleSubmit)}>
      <MaskedTextInput
        {...form.getInputProps('cardNumber')}
        mask="0000 0000 0000 0000"
        placeholder="0000 0000 0000 0000"
      />
      <BankCardGrid>
        <MaskedTextInput
          {...form.getInputProps('month')}
          mask="00"
          placeholder="Месяц"
        />
        <MaskedTextInput
          {...form.getInputProps('year')}
          mask="0000"
          placeholder="Год"
        />
        <MaskedTextInput
          {...form.getInputProps('cvv')}
          mask="0000"
          placeholder="CVV"
        />
      </BankCardGrid>
      <Center>
        <Button>Следующий</Button>
      </Center>
    </BankCardWrapper>
  );
};

export default BankCardForm;
