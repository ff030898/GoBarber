import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getVaidationErrors from '../../utils/getValidationErros';
import { AnimatorContainer, Background, Container, Content } from './styles';

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const Schema = Yup.object().shape({
        email: Yup.string().required('Email é obrigatório').email('Digite um email válido'),

      });

      await Schema.validate(data, {
        abortEarly: false
      });

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
            <h1>Digite seu email</h1>
            <Input name="email" icon={FiMail} type="email" placeholder="Email" />

            <Button type="submit">Recuperar Senha</Button>

          </Form>

          <Link to="/">
          <FiArrowLeft />
         Voltar para logon
         </Link>
        </AnimatorContainer>
      </Content>

      <Background />
    </Container>
  )
};

export default ForgotPassword;


