import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { api } from '../services/api';
import { Button, Form } from '../styles';

export const CadastrarProduto: React.FC = () => {

  interface ITipoProduto {
    id: number;
    descricao: string;
  }

  interface IProduto {
    codProduto?: number;
    descProduto: string;
    valorProduto: number;
    tipoProduto: ITipoProduto;
  }

  const history = useHistory();
  const [tipos, setTipos] = useState<ITipoProduto[]>([]);
  const [produto, setProduto] = useState<IProduto>({} as IProduto);

  let config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc1MDIyODMsImV4cCI6MTYzNzU4ODY4Mywic3ViIjoiMSJ9.XSqYR7Soqqky3WioOe6xMxr-aCe6n_mavxsill7ydmo'
    }
  }

  useEffect(() => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query)
    const id = urlParams.get('produto')

    if (id) {
      api
        .get(`produto/${id}`, config)
        .then(response => setProduto(response.data))
    }

    try {
      api
        .get(`/tipo-produto`, config)
        .then(response => setTipos(response.data));
    }
    catch {
      alert('Problema ao consultar os tipos de produtos')
    }
  })

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
        .then(response => {
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

    history.push('/produto')
  }

  return (
    <>
      <h1>Cadastrar Produto</h1>
      <Form onSubmit={handleSubmit}>
        <input hidden value={produto.codProduto} />
        <label>Produto</label>
        <input type="text" name="descProduto" onChange={handleChange} placeholder={produto.descProduto} /><br />
        <label>Valor Unitário</label>
        <input type="number" name="valorProduto" step=".01" onChange={handleChange} placeholder={String(produto.valorProduto)} /><br />
        <label>Tipo de Produto</label>
        <select name="tipoProduto" onChange={handleChangeSelect}>
          {
            produto.codProduto && (
              <option defaultValue={produto.tipoProduto.id}>{produto.tipoProduto.descricao}</option>
            )
          }
          {
            !produto.codProduto && (
              <option defaultValue="">Selecione o tipo desse produto</option>
            )
          }
          {
            tipos.map((tipo, key) => {
              return (
                <option key={key} value={tipo.id}>{tipo.descricao}</option>
              )
            })
          }
        </select>
        <Button type='submit'>Cadastrar</Button>
      </Form>
    </>
  )
}