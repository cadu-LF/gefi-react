import React, { useState } from 'react';
import { Form } from '../styles';

export const CadastrarMembro: React.FC = () => {
  interface IMember {
    id?: number;
    nome: string;
    idade: Date;
    sexo: string;
    email: string;
    idSessao: number;
    idResponsavel: number;
    registro: number;
    vencimento: Date;
  }

  interface IEndereco {
    id?: number;
    numero: number;
    rua: string;
    bairro: string;
    complemento: string;
  }

  const [hasBrother, setHasBrother] = useState(false);
  const [sessoes, setSessoes] = useState([{id: 1, descricao: 'ahoy'}]);
  const [responsaveis, setResponsaveis] = useState([{id: 1, nome: 'captain'}]);
  const [membro, setMembro] = useState<IMember>({} as IMember);
  const [endereco, setEndereco] = useState<IEndereco>({} as IEndereco);

  const handleChangeMembro = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const aux =  Object.assign(membro, {
      [e.target.name]: e.target.value,
    });
    console.log(membro);
  }

  const handleChangeEndereco = (e: React.ChangeEvent<HTMLInputElement>) => {
    const aux =  Object.assign(endereco, {
      [e.target.name]: e.target.value,
    });
    console.log(endereco);
  }

  const handleHasBrother = () => {
    setHasBrother(!hasBrother);
  }

  return(
    <>
      <h1>Cadastrar Membro</h1>
      <Form>
        <label>Nome Completo</label>
        <input type="text" name="nome" onChange={handleChangeMembro}/><br/>
        <label>Data Nascimento</label>
        <input type="date" name="idade" onChange={handleChangeMembro}/><br/>
        <label>Sexo</label>
        <select placeholder="Selecione o sexo..." name="sexo" onChange={handleChangeMembro}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select><br/>
        <label>E-mail</label>
        <input type="email" name="email" onChange={handleChangeMembro}/><br/>
        <label>CPF</label>
        <input type="text" name="cpf" onChange={handleChangeMembro}/><br/>
        <label>Sessão</label>
        <select placeholder="Selecione a sessão..." name="idSessao" onChange={handleChangeMembro}>
          {
            sessoes.map( (sessao) => {
              <option value={sessao.id}>{sessao.descricao}</option>
            })
          }
        </select><br/>
        <label>Responsável</label>
        <select placeholder="Selecione o responsável..." name="idResponsavel" onChange={handleChangeMembro}>
          {
            responsaveis.map( (responsavel) => {
              <option value={responsavel.id}>{responsavel.nome}</option>
            })
          }
        </select><br/>
        <label>Número de Registro</label>
        <input type="number" name="registro" onChange={handleChangeMembro}/><br/>
        <label>Vencimento do Registro</label>
        <input type="date" name="vencimento" onChange={handleChangeMembro}/><br/>
        <label>Possui irmãos?</label>
        <input type="checkbox" onChange={handleHasBrother}/><br/>
        {hasBrother && (
          <>
            <label>Número de irmãos</label>
            <input id="irmaos" type="number" min="1" max="10"/><br/>
          </>
        )}
        <label>Bairro</label>
        <input type="text" name="bairro" onChange={handleChangeEndereco}/><br/>
        <label>Rua</label>
        <input type="text" id="rua" onChange={handleChangeEndereco}/><br/>
        <label>Número</label>
        <input type="number" id="numero" onChange={handleChangeEndereco}/><br/>
        <label>Complemento</label>
        <input type="text" id="complemento" onChange={handleChangeEndereco}/><br/>
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  )
}