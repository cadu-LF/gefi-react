import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { api } from '../services/api';
import { Button, Form } from '../styles';

export const Login: React.FC = () => {
  interface ILogin {
    email: string;
    password: string;
  }

  const history = useHistory();
  const [login, setLogin] = useState<ILogin>({} as ILogin);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Object.assign(login, {
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    api
      .post('/users/check', login)
      .then(response => {
        if (response.data === 'OK') {
          history.push('/usuarios');
        }
        else {
          alert(response.data);          
        }
      });
  }

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input type="email" name="email" onChange={handleChange}/>
        <label>Senha</label>
        <input type="password" name="password" onChange={handleChange}/>
        <Button type="submit">Entrar</Button>
      </Form>
    </>
  )
}