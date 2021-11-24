import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { Table } from '../styles';

export const VisualizarProdutos: React.FC = () => {
  let config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2OTk2NzgsImV4cCI6MTYzNzc4NjA3OCwic3ViIjoiMSJ9.ItsRwHxZfCA_6HiCB0zy4vfIED6pQzCIjPuc2mh1T2I'
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