import { Form } from '@unform/web';
import React, { useCallback } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Background, Container, Content } from './styles';


const SignUp: React.FC = () => {

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async(data: object) => {
    try {
      const Schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('Email é obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos')
      });

      await Schema.validate(data, {
        abortEarly: false
      });

    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>

      <Background />

      <Content>
        <img src={Logo} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="Email" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="back">

          <FiArrowLeft />
         Voltar para logon
         </a>
      </Content>


    </Container>

  );
};

export default SignUp;


