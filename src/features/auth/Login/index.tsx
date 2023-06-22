import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

import InputField from '../../../components/Form/InputField';
import PasswordInputField from '../../../components/Form/PasswordInputField';
import { useAppDispatch } from '../../../lib/useAppDispatch';
import { setCredentials } from '../../../store/slices/auth';
import { Paths } from '../../../config/paths';
import { Centered, ContentWrapper } from '../styles'
import { Button, FormWrapper } from './styles'

const user = {
  name: 'User',
  password: '12345'
};

const LoginSchema = z.object({
  username: z.string().min(3, 'Пожалуйста, введите имя!'),
  password: z.string().min(3, 'Пожалуйста, введите пароль!')
});

type LoginFormValues = z.infer<typeof LoginSchema>;

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validate: (values) => {
      const resolver = zodResolver(LoginSchema);
      const errors = resolver(values);
      return errors;
    },
  });

  const handleSubmit = (values: LoginFormValues) => {
    if (user.name !== values.username) {
      form.setFieldError('username', 'Неправильное имя пользователя!');
      return;
    };

    if (user.password !== values.password) {
      form.setFieldError('password', 'Пароли не совпадают!');
      return;
    }

    dispatch(setCredentials({ user: values.username, isLoggedIn: !!values.username }));
    navigate(Paths.MAIN);
    form.reset();
  }

  return (
    <Centered>
      <ContentWrapper>
        <FormWrapper onSubmit={form.onSubmit(handleSubmit)}>
          <InputField placeholder="Имя" {...form.getInputProps('username')} />
          <PasswordInputField placeholder="Пароль" {...form.getInputProps('password')} />
          <Button>Войти</Button>
        </FormWrapper>
      </ContentWrapper>
    </Centered>
  )
}

export default Login