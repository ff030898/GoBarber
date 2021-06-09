import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock } from 'react-icons/fi';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';
import getVaidationErrors from '../../utils/getValidationErros';
import { AnimatorContainer, Background, Container, Content } from './styles';

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const Schema = Yup.object().shape({
        password: Yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 digitos'),
        password_confirmation: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Confirmação incorreta",
        ),
      });

      await Schema.validate(data, {
        abortEarly: false
      });

      addToast({
        type: 'success',
        title: 'Pronto!',
        description: 'Senha alterada com sucesso!'
      });

    } catch (err) {
      if(err instanceof Yup.ValidationError){
        const erros = getVaidationErrors(err);
        formRef.current?.setErrors(erros);
      }

      addToast({
        type: 'error',
        title: 'Ocorreu um erro',
        description: 'Verifique se os campos estão preenchidos corretamente'
      });
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimatorContainer>
          <img src={Logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar Senha</h1>
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Input name="password_confirmation" icon={FiLock} type="password" placeholder="Confirmar Senha" />

            <Button type="submit">Alterar Senha</Button>

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

export default ResetPassword;


