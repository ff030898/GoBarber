import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';
import getVaidationErrors from '../../utils/getValidationErros';
import { AnimatorContainer, Background, Container, Content } from './styles';

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

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

      addToast({
        type: 'success',
        title: 'Email enviado!',
        description: 'Verifique sua caixa de email'
      });

    } catch (err) {
      if(err instanceof Yup.ValidationError){
        const erros = getVaidationErrors(err);
        formRef.current?.setErrors(erros);
      }

      addToast({
        type: 'error',
        title: 'Ocorreu um erro',
        description: 'Verifique se o email digitado está correto'
      });
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimatorContainer>
          <img src={Logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar Senha</h1>
            <Input name="email" icon={FiMail} type="email" placeholder="Email" />

            <Button type="submit">Recuperar</Button>

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


