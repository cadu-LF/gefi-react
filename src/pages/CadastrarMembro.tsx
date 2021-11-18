import React, { useState } from 'react';

export const CadastrarMembro: React.FC = () => {
  const [hasBrother, setHasBrother] = useState(false);
  const [sessoes, setSessoes] = useState([{id: 1, descricao: 'ahoy'}]);
  const [responsaveis, setResponsaveis] = useState([{id: 1, nome: 'captain'}]);

  return(
    <>
      <h1>Cadastrar Membro</h1>
      <form>
        <label>Nome Completo</label>
        <input type="text" /><br/>
        <label>Data Nascimento</label>
        <input type="date" /><br/>
        <label>Sexo</label>
        <select>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select><br/>
        <label>E-mail</label>
        <input type="email" /><br/>
        <label>CPF</label>
        <input type="text" /><br/>
        <label>Sessão</label>
        <select placeholder="Selecione a sessão...">
          {
            sessoes.map( (sessao) => {
              <option value={sessao.id}>{sessao.descricao}</option>
            })
          }
        </select><br/>
        <label>Responsável</label>
        <select placeholder="Selecione o responsável...">
          {
            responsaveis.map( (responsavel) => {
              <option value={responsavel.id}>{responsavel.nome}</option>
            })
          }
        </select><br/>
        <label>Número de Registro</label>
        <input type="number" /><br/>
        <label>Vencimento do Registro</label>
        <input type="date" /><br/>
        <label>Bairro</label>
        <input type="text" /><br/>
        <label>Rua</label>
        <input type="text" /><br/>
        <label>Número</label>
        <input type="number" /><br/>
        <label>Complemento</label>
        <input type="text" /><br/>
        <label>Possui irmãos?</label>
        <input type="radio" /><br/>
        {hasBrother && (
          <>
            <label>Número de irmãos</label>
            <input type="range" min="0" max="10"/><br/>
          </>
        )}
        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}