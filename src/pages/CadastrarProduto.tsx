import React, { useState } from 'react';

export const CadastrarProduto: React.FC = () => {
  const [tipos, setTipos] = useState([{id: 1, descricao: 'caixa'}]);

  return(
    <>
      <h1>Cadastrar Produto</h1>
      <form>
        <label>Produto</label>
        <input type="text" /><br />
        <label>Valor Unitário</label>
        <input type="number" /><br />
        <label>Tipo de Produto</label>
        <select placeholder="Selecione o tipo desse produto...">
          {
            tipos.map( (tipo) => {
              <option value={tipo.id}>{tipo.descricao}</option>
            })
          }
        </select>
        <button type='submit'>Cadastrar</button>
      </form>
    </>
  )
}