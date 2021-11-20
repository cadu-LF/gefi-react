import React from 'react';
import { Form } from '../styles';

export const CadastrarResponsavel: React.FC = () => {
  return(
    <>
      <h1>Cadastrar Responsável</h1>
      <Form>
        <label>Nome do Responsável</label>
        <input type="text" />
        <label>Data de Nascimento</label>
        <input type="date" />
        <label>Sexo</label>
        <select>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
        <label>E-mail</label>
        <input type="email" />
        <label>CPF</label>
        <input type="text" />
        <label>É voluntário?</label>
        <input type="radio" />
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  )
}
