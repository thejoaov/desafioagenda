import React, { useCallback, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';

import { Container, Form, Title } from './styles';
import defaultTheme from '../../styles/theme/default';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { signIn, loading } = useAuth();
  const { colors } = defaultTheme;

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .min(6, 'A senha deve conter no mínimo 6 caracteres')
            .required('A senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          Alert.alert(
            'Ocorreu um erro',
            'Verifique sua conexão e tente novamente',
          );
        }
      }
    },
    [signIn],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Container>
          <Form onSubmit={handleSignIn} ref={formRef}>
            <Title>Faça seu login 🔑</Title>
            <Input
              testID="@pages:signin/email"
              title="E-mail ou usuário"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="seuemail@incrivel.com"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />

            <Input
              testID="@pages:signin/password"
              title="Senha"
              ref={passwordInputRef}
              name="password"
              icon="lock"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
          </Form>

          <Button onPress={() => formRef.current?.submitForm()}>
            {loading ? (
              <ActivityIndicator size={24} color={colors.white} />
            ) : (
              'Entrar'
            )}
          </Button>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
