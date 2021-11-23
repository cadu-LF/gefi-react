import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Button, Form, Table } from '../styles';

export const Usuarios: React.FC = () => {
  let config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2Mjk5MTksImV4cCI6MTYzNzcxNjMxOSwic3ViIjoiMSJ9.6WHVALyR47sAKGFpvcJZ8oC7a1dfUgO7ov0mRCo2j2c'
    }
  }
  
  interface IUsuario {
    id?: number;
    name: string;
    email: string;
    password: string;
  }

  const [users, setUsers] = useState<IUsuario[]>([]);
  const [atual, setAtual] = useState<IUsuario>({} as IUsuario);

  useEffect(() => {
    try {
      api
        .get('/users', config)
        .then(response => setUsers(response.data));
    }
    catch{
      alert('Ocorreu um erro ao buscar os usuários cadastrados');
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Object.assign(atual, {
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = () => {
    try {
      api
        .post('/users', atual)
        .then(response => alert('Novo usuário cadastrado com sucesso'));
    }
    catch {
      alert('Ocorreu um erro ao cadastrar um novo usuário');
    }
  }

  return (
    <>
      <h1>Gerenciar Usuários</h1>
      <Form onSubmit={handleSubmit}>
        <input hidden value={atual.id}/>
        <label>Nome do Usuário</label>
        <input type="text" name="name" onChange={handleChange}/>
        <label>Email do Usuário</label>
        <input type="email" name="email" onChange={handleChange}/>
        <label>Senha do Usuário</label>
        <input type="password" name="password" onChange={handleChange}/>
        <Button type="submit">Adicionar Usuário</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}