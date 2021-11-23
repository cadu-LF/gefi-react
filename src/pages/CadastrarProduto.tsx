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
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2Mjk5MTksImV4cCI6MTYzNzcxNjMxOSwic3ViIjoiMSJ9.6WHVALyR47sAKGFpvcJZ8oC7a1dfUgO7ov0mRCo2j2c'
    }
  }

  useEffect(() => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query)
    const id = urlParams.get('produto')

    if (id) {
      try {
        api
          .get(`produto/${id}`, config)
          .then(response => setProduto(response.data))
      }
      catch {
        alert('Ocorreu um erro ao pegar as informações do produto')
      }
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
    const aux = Object.assign(produto, {
      [e.target.name]: e.target.value,
    });

    setProduto(aux)
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
    if (!produto.descProduto) {
      alert('O nome do produto deve ser informado')
    }
    if (!produto.codProduto) {
      try {
        api
          .post('/produto', produto, config)
          .then((response) => alert('Produto cadastrado com sucesso'));

        history.push('/produto')
      }
      catch {
        alert('Ocorreu algum problema ao tentar cadastrar o Produto');
      }
    }
    else {
      const request = {
        descProduto: produto.descProduto,
        valorProduto: produto.valorProduto,
        tipoProduto: {
          id: produto.tipoProduto.id,
          descricao: produto.tipoProduto.descricao
        }
      }
      console.log(request);
      try {
        api
          .put(`/produto/${produto.codProduto}`, request, config)
          .then(response => alert('Produto cadastrado com sucesso'))
          
          history.push('/produto')
      }
      catch {
        alert('Ocorreu algum problema ao tentar atualizar o Produto');
      }
    }
  }

  return (
    <>
      <h1>Cadastrar Produto</h1>
      <Form onSubmit={handleSubmit}>
        <input hidden value={produto.codProduto} />
        <label>Produto</label>
        <input type="text" name="descProduto" onChange={handleChange} value={produto.descProduto} /><br />
        <label>Valor Unitário</label>
        <input type="number" name="valorProduto" step=".01" onChange={handleChange} value={produto.valorProduto} /><br />
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