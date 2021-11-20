import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Form } from '../styles';

export const CadastrarProduto: React.FC = () => {

  interface ITipoProduto {
    id: number;
    descricao: string;
  }

  interface IProduto{
    descProduto: string;
    valorProduto: number;
    tipoProduto: ITipoProduto;
  }

  const [tipos, setTipos] = useState<ITipoProduto[]>([]);
  const [produto, setProduto] = useState<IProduto>({} as IProduto);

  let config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzczNTk0MzksImV4cCI6MTYzNzQ0NTgzOSwic3ViIjoiMSJ9.xjmltk89dEvuVkGT-nb3Ck-kNoF_bhy8qIP7FY-gR0o'
    }
  }

  useEffect( () => {
    try {
      api
        .get(`/tipo-produto`, config)
        .then( response => setTipos(response.data) );
    }
    catch {
      alert('Problema ao consultar os tipos de produtos')
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Object.assign(produto, {
      [e.target.name]: e.target.value,
    });
    console.log(produto);
  }

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      api
        .get(`/tipo-produto/${e.target.value}`, config)
        .then( response => {
          Object.assign(produto, {
            [e.target.name]: response.data,
          })
        }
        );
    }
    catch {
      alert('Problema na api do tipo-produto');
    }
  }

  const handleSubmit = () => {
    try {
      api
        .post('/produto', produto, config)
        .then((response) => alert('Produto cadastrado com sucesso'));
    }
    catch {
      alert('Ocorreu algum problema ao tentar cadastrar o Produto');
    }
  }

  return(
    <>
      <h1>Cadastrar Produto</h1>
      <Form onSubmit={handleSubmit}>
        <label>Produto</label>
        <input type="text" name="descProduto" onChange={handleChange}/><br />
        <label>Valor Unitário</label>
        <input type="number" name="valorProduto" step=".01" onChange={handleChange}/><br />
        <label>Tipo de Produto</label>
        <select placeholder="Selecione o tipo desse produto..." name="tipoProduto" onChange={handleChangeSelect}>
          {
            tipos.map( (tipo) => {
              return(
                <option value={tipo.id}>{tipo.descricao}</option>
              )
            })
          }
        </select>
        <button type='submit'>Cadastrar</button>
      </Form>
    </>
  )
}