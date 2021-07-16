import React, { useCallback, useState } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { FiClock, FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Logoimg from '../../assets/logo.svg';
import { useToast } from '../../hooks/toast';
import { Appointment, Calendar, Container, Content, Header, HeaderContent, NextAppointment, Profile, Schedule, Section } from './styles';

const Dashboard: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if(modifiers.available){
      setSelectedDate(day);
    }

  }, [])

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

          <Section>
            <strong>Manhã</strong>
            <Appointment>

              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/45288456?v=4"
                  alt="Fabricio Ferreira"
                />

                <strong>Fabricio Ferreira</strong>

              </div>
            </Appointment>

            <Appointment>

              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/45288456?v=4"
                  alt="Fabricio Ferreira"
                />

                <strong>Fabricio Ferreira</strong>

              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>

              <span>
                <FiClock />
                15:00
              </span>

              <div>

                <img
                  src="https://avatars.githubusercontent.com/u/45288456?v=4"
                  alt="Fabricio Ferreira"
                />

                <strong>Fabricio Ferreira</strong>

              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
           weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
           fromMonth={new Date()}
           disabledDays={[
             {daysOfWeek: [0]}
           ]}
           selectedDays={selectedDate}
           modifiers={{
             available: { daysOfWeek: [1,2,3,4,5,6]}

           }}
           onDayClick={handleDateChange}
           months={[
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
           ]}
          />
        </Calendar>
      </Content>
    </Container>
  )
}

export default Dashboard;


