import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useToast } from '../../hooks/toast';
import { AvatarInput, Container, Content } from "./styles";



const Profile: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();


  function handleSubmit() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      addToast({
        type: 'success',
        title: 'Pronto',
        description: 'Dados alterados com sucesso!'
      });
    }, 2000)

  }

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      console.log(e.target.files[0]);
    }

  }, []);


  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src="https://github.com/ff030898.png" alt="Fabrício" />
            <label htmlFor="avatar">
              <FiCamera />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Senha atual"
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Nova senha"
          />

          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmar senha"
          />

          <Button loading={loading} type="submit">
            Confirmar mudanças
          </Button>
        </Form>
      </Content>
    </Container>

  )
}

export default Profile;
