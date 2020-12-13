import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { Background, Container, Content } from './styles';


const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="back">

        <FiLogIn />
         Criar conta
         </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;


