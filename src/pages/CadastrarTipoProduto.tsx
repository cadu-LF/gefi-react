import React from 'react';
import { Form } from '../styles';

export const CadastrarTipoProduto: React.FC = () => {
  return(
    <>
      <h1> Cadastrar Tipo de Produto </h1>
      <Form>
        <label>Nome do Tipo de Produto</label>
        <input type="text" name="dsTipo" />
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  )
}