import React, { useState } from 'react';
import { Form } from '../styles';

export const CadastrarCompra: React.FC = () => {
  const [membros, setMembros] = useState([{id: 1, nome: 'Tim'}]);
  const [produtos, setProdutos] = useState([{id: 1, descricao: 'caixa', qtde: 15}]);

  return(
    <>
      <h1>Cadastrar Compra</h1>
      <Form>
        <label>Membro Comprador</label>
        <select placeholder="Selecione um membro">
          {
            membros.map( (membro) => {
              <option value={membro.id}>{membro.nome}</option>
            })
          }
        </select><br />
        <label>Produtos</label>
        <select placeholder="Selecione um produto">
          {
            produtos.map( (produto) => {
              <option value={produto.id}>{produto.descricao}</option>
            })
          }
        </select><br />
        <label>Quantidade</label>
        <input type="range" min='1' max='15'/>
        <button type="submit">Registrar Compra</button>
      </Form>
    </>
  )
}