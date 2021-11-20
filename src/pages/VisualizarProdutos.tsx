import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { Table } from '../styles';

export const VisualizarProdutos: React.FC = () => {
  let config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc0MTIwMzUsImV4cCI6MTYzNzQ5ODQzNSwic3ViIjoiMSJ9.g1zLNxz_djz_zBRkBmaYWBLzz8Wk8o98LpgZ8HxC-8o'
    }
  }

  interface IProduto{
    codProduto: number;
    descProduto: string;
    valorProduto: number;
    tipoProduto: {
      id: number;
      descricao: string
    };
  }

  const [produtos, setProdutos] = useState<IProduto[]>([]);

  useEffect(() => {
    api
      .get('/produto', config)
      .then(response => setProdutos(response.data))
  })

  const handleDelete = (id: number) => {
    api
      .delete(`/produto/${id}`, config)
      .then(response => alert('Produto deletado com sucesso'))
  }

  return (
    <>
      <h1>Visualizar Produtos</h1>
      <Table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor</th>
            <th>Tipo de Produto</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {
            produtos.map((produto, key) => {
              return (
                <tr key={key}>
                  <td>
                    <Link to={`/cadastrar-produto?produto=${produto.codProduto}`}>
                      {produto.descProduto}
                    </Link>
                  </td>
                    <td>{produto.valorProduto}</td>
                    <td>{produto.tipoProduto.descricao}</td>
                    <td>
                      <button onClick={() => handleDelete(produto.codProduto)}>
                        <AiFillDelete/> 
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