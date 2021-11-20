import React, { useState } from 'react';
import { api } from '../services/api';
import { Form } from '../styles';

export const CadastrarTipoProduto: React.FC = () => {

  interface ITipoProduto {
    descricao: string;
  }

  let config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzczNTk0MzksImV4cCI6MTYzNzQ0NTgzOSwic3ViIjoiMSJ9.xjmltk89dEvuVkGT-nb3Ck-kNoF_bhy8qIP7FY-gR0o'
    }
  }

  const [tipoProduto, setTipoProduto] = useState<ITipoProduto>({} as ITipoProduto);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Object.assign(tipoProduto, {
      [e.target.name]: e.target.value,
    });
    console.log(tipoProduto);
  }

  const handleSubmit = (): void => {
    console.log(tipoProduto)
    if (!tipoProduto.descricao) {
      alert('Problema ao criar tipo de produto')
    }
    else {
      try {
        api
          .post<ITipoProduto>(`/tipo-produto`, tipoProduto, config)
          .then( response => alert(`Tipo de Produto adicionado com sucesso`));

        setTipoProduto({} as ITipoProduto);
      }
      catch {
        alert('Problema ao criar tipo de produto');
      }
    }
  }

  return(
    <>
      <h1> Cadastrar Tipo de Produto </h1>
      <Form onSubmit={handleSubmit}>
        <label>Nome do Tipo de Produto</label>
        <input type="text" name="descricao" onChange={handleChange}/>
        <button type="submit">Cadastrar</button>
      </Form>
    </>
  )
}