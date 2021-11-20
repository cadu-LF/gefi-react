import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { api } from '../services/api';
import { Form } from '../styles';

export const Sessoes: React.FC = () => {
  
  interface ISessao {
    id?: number;
    nome: string;
    qtdeMembros: number;
  }

  const [sessoes, setSessoes] = useState<ISessao[]>([]);
  const [atual, setAtual] = useState<ISessao>({} as ISessao);

  let config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzczNTk0MzksImV4cCI6MTYzNzQ0NTgzOSwic3ViIjoiMSJ9.xjmltk89dEvuVkGT-nb3Ck-kNoF_bhy8qIP7FY-gR0o'
    }
  }
  
  useEffect(() => {
    try {
      api
        .get('/sessao', config)
        .then( response => setSessoes(response.data));
    }
    catch {
      alert('Ocorreu um erro inesperado!')
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const aux = Object.assign(atual, {
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if(!atual.nome) {
      alert('É preciso informar um nome para a Sessão');
    }
    else if(!atual.id){
      try {
        api 
          .post('/sessao', atual, config)
          .then( response => alert('Sessão cadastrada com Sucesso'));
      }
      catch {
        alert('Ocorreu algum erro ao criar uma nova Sessão');
      }
    }
    else {
      try {
        api
          .put(`/sessao/${atual.id}`, atual, config)
          .then(response => alert('Sessão atualizada com Sucesso'));
      }
      catch {
        alert('Ocorreu algum erro ao atualizar a Sessão');
      }
    }
  }

  const deleteSessao = (id: any) => {

    console.log(`Oi: ${id}`)
  }

  const updateSessao = (sessao: ISessao) => {

    if (sessao) {
      setAtual(sessao)
    }
  }

  return (
    <>
      <h1>Cadastrar Sessão</h1>
      <Form onSubmit={handleSubmit}>
        <input hidden value={atual.id} />
        <label>Nome</label>
        <input type="text" name="nome" onChange={handleChange} value={atual.nome}/>
        <label>Quantidade de Membros</label>
        <input type="number" name="qtdeMembros" onChange={handleChange} value={atual.qtdeMembros}/>
        <button type="submit">Registrar Sessão</button>
      </Form>
      <table>
      <thead>
        <tr> 
          <th> Nome </th>
          <th> Quantidade de Membros</th>
          <th> Remove </th>
          <th> Atualiza </th>
        </tr>
      </thead>
      <tbody>
        {
          sessoes.map( (sessao, key) => {
            return(
              <tr>
                <td>{sessao.nome}</td>
                <td>{sessao.qtdeMembros}</td>
                <td>  <button onClick={() => deleteSessao(sessao.id)}>  <AiFillDelete/> </button></td>
                <td> <button onClick={() => updateSessao(sessao)}>  <AiFillEdit/> </button></td>
              </tr>
            )
          })
        }
        {/* <tr>
          <td> {product.name} </td>
          <td> {product.quantity}</td>
          <td> {product.price}</td>
          <td>  <button onClick={() => deleteProduct(product.id)}>  <AiFillDelete/> </button></td>
          <td> <button onClick={() => updateProduct(product)}>  <AiFillEdit/> </button></td>
        </tr> */}
      

      
      </tbody>
      </table>
    </>
  )
}