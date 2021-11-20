import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { api } from '../services/api';
import { Button, Form, Table } from '../styles';

export const TipoProduto: React.FC = () => {
  let config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc0MTIwMzUsImV4cCI6MTYzNzQ5ODQzNSwic3ViIjoiMSJ9.g1zLNxz_djz_zBRkBmaYWBLzz8Wk8o98LpgZ8HxC-8o'
    }
  }

  interface ITipo {
    id?: number;
    descricao: string;
  }

  const [atual, setAtual] = useState<ITipo>({} as ITipo);
  const [tipos, setTipos] = useState<ITipo[]>([]);

  useEffect(() => {
    try {
      api
        .get('/tipo-produto', config)
        .then(response => setTipos(response.data))
    }
    catch {
      alert('Ocorreu um erro inesperado')
    }
  })

  const handleDelete = (id: number | undefined) => {
    api
      .delete(`/tipo-produto/${id}`, config)
      .then(response => alert('Tipo de Produto deletado com sucesso'))
  }

  const handleUpdate = (tipo: ITipo) => {
    if (tipo) {
      setAtual(tipo);
    }
  }

  const handleSubmit = () => {
    if (!atual.descricao) {
      alert('É preciso informar o nome do tipo do produto')
    }
    else if (!atual.id) {
      try {
        api
          .post('/tipo-produto', atual, config)
          .then(response => alert('Tipo de Produto cadastrado com sucesso'))
      }
      catch {
        alert('Ocorreu um erro ao cadastrar um novo Tipo de Produto')
      }
    }
    else {
      const request = {
        descricao: atual.descricao
      }

      try {
        api
          .put(`/tipo-produto/${atual.id}`, request, config)
          .then(response => alert('Tipo de Produto atualizado com sucesso'))
      }
      catch {
        alert('Ocorreu um erro ao atualizar o Tipo de Produto ' + atual.id)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Object.assign(atual, {
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Cadastrar Tipo de Produto</h1>
      <Form onSubmit={handleSubmit}>
        <input hidden value={atual.id}/>
        <label>Nome do Tipo de Produto</label>
        <input type="text" name="descricao" onChange={handleChange} value={atual.descricao}/>
        <Button type="submit">Cadastrar</Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Tipo de Produto</th>
            <th>Remover</th>
            <th>Atualizar</th>
          </tr>
        </thead>
        <tbody>
          {
            tipos.map( (tipo, key) => {
              return (
                <tr key={key}>
                  <td>{tipo.descricao}</td>
                  <td>
                    <button onClick={() => handleDelete(tipo.id) }>
                      <AiFillDelete/> 
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(tipo) }>
                      <AiFillEdit/> 
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}