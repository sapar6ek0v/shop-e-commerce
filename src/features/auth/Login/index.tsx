import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

import InputField from '../../../components/Form/InputField';
import PasswordInputField from '../../../components/Form/PasswordInputField';
import SEO from '../../../components/SEO';
import { useAppDispatch } from '../../../lib/useAppDispatch';
import { setCredentials } from '../../../store/slices/auth';
import { Paths } from '../../../config/paths';
import {
  Button,
  Centered,
  ContentWrapper,
  FormWrapper,
  WelcomeTitle
} from './styles'

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
    navigate(Paths.MAIN, { replace: true });
    form.reset();
  }

  return (
    <>
      <SEO
        title="Вход"
        description="Страница ввода"
        keywords=""
        name=""
        type=""
        href={Paths.LOGIN}
      />
      <Centered>
        <ContentWrapper>
          <FormWrapper onSubmit={form.onSubmit(handleSubmit)}>
            <WelcomeTitle>Добро пожаловать!</WelcomeTitle>
            <InputField placeholder="Имя" {...form.getInputProps('username')} />
            <PasswordInputField placeholder="Пароль" {...form.getInputProps('password')} />
            <Button>Войти</Button>
          </FormWrapper>
        </ContentWrapper>
      </Centered>
    </>
  )
}

export default Login