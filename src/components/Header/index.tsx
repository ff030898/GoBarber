import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Logoimg from '../../assets/logo.svg';
import { useToast } from '../../hooks/toast';
import { Header, HeaderContent, Profile } from './styles';

interface PropsHeader {
  route: string;
}


const HeaderComponent: React.FC<PropsHeader>= (props)=> {

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
    <Header>
      <HeaderContent>
          <img src={Logoimg} alt="Go Barber" />
        <Profile>

          <img
            src="https://github.com/ff030898.png"
            alt="Fabricio Ferreira"
          />
          <div>
            <span>Bem-vindo,</span>
            <Link to={props.route}>
              <strong>Fabrício Ferreira</strong>
            </Link>
          </div>

        </Profile>

        <button type="button" onClick={handleLogoff}>
          <FiPower />
        </button>

      </HeaderContent>
    </Header>
  )
}

export default HeaderComponent;
