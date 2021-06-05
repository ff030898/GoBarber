import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getVaidationErrors from '../../utils/getValidationErros';
import { AnimatorContainer, Background, Container, Content } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const Schema = Yup.object().shape({
        email: Yup.string().required('Email é obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha é obrigatório')
      });

      await Schema.validate(data, {
        abortEarly: false
      });

      <Link to="/dashboard" />

    } catch (err) {
      const erros = getVaidationErrors(err);
      formRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimatorContainer>
          <img src={Logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} type="email" placeholder="Email" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>

          <Link to="/signup">

            <FiLogIn />
       Criar conta
       </Link>
        </AnimatorContainer>
      </Content>

      <Background />
    </Container>
  )
};

export default SignIn;


