import React from 'react'
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

import InputField from '../../../../components/Form/InputField'
import MaskedTextInput from '../../../../components/Form/MaskedInputField';
import { RegEx } from '../../../../utils/regex';
import { Button, PersonalDataWrapper, PersonalDataGrid } from './styles'

interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder, ...props }: InputProps) => {
  return (
    <InputField
      {...props}
      placeholder={placeholder}
      sx={{ input: { background: 'var(--secondary-gray)' } }}
    />)
}

const PersonalDataSchema = z.object({
  firstName: z.string().min(3, 'Пожалуйста, введите имя!'),
  lastName: z.string().min(3, 'Пожалуйста, введите фамилию!'),
  email: z.string().email('Пожалуйста, введите правильный формат почты!'),
  phone: z.string().regex(RegEx.phone, 'Пожалуйста, введите правильный формат телефона!')
});

type PersonalDataValues = z.infer<typeof PersonalDataSchema>;

interface Props {
  setPersonalData: (value: PersonalDataValues) => void;
  nextStep: () => void;
}

const PersonalDataForm = ({ setPersonalData, nextStep }: Props) => {
  const form = useForm<PersonalDataValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    validate: (values) => {
      const resolver = zodResolver(PersonalDataSchema);
      const errors = resolver(values);
      return errors;
    },
  });

  const handleSubmit = (values: PersonalDataValues) => {
    setPersonalData(values);
    nextStep();
  };

  return (
    <PersonalDataWrapper onSubmit={form.onSubmit(handleSubmit)}>
      <PersonalDataGrid>
        <Input {...form.getInputProps('firstName')} placeholder='Имя' />
        <Input {...form.getInputProps('lastName')} placeholder='Фамилия' />
        <Input {...form.getInputProps('email')} placeholder='Почта' />
        <MaskedTextInput
          {...form.getInputProps('phone')}
          placeholder='+7 (000) 000 00 00'
          mask='+7 (000) 000 00 00'
        />
      </PersonalDataGrid>
      <Button>Следующий</Button>
    </PersonalDataWrapper>
  )
}

export default PersonalDataForm