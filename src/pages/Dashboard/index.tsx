import React from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Logoimg from '../../assets/logo.svg';
import { useToast } from '../../hooks/toast';
import { Calendar, Container, Content, Header, HeaderContent, NextAppointment, Profile, Schedule } from './styles';


const Dashboard: React.FC = () => {

  const { addToast } = useToast();
  const history = useHistory();

  function handleLogoff() {

    history.push("/");

    addToast({
      type: 'info',
      title: 'Saindo',
      description: 'Foi foi deslogado da aplicação!'
    });
  }
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={Logoimg} alt="Go Barber" />
          <Profile>

            <img
              src="https://avatars.githubusercontent.com/u/45288456?v=4"
              alt="Fabricio Ferreira"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>Fabrício Ferreira</strong>
            </div>
          </Profile>

          <button type="button" onClick={handleLogoff}>
            <FiPower />
          </button>

        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 20</span>
            <span>Domingo</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/45288456?v=4"
                alt="Fabricio Ferreira"
              />

              <strong>Fabricio Ferreira</strong>
              <span>
                <FiClock />
                15:00
                </span>
            </div>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  )
}

export default Dashboard;


