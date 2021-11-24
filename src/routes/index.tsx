import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CadastrarProduto } from '../pages/CadastrarProduto';
import { Login } from '../pages/Login';
import { Sessoes } from '../pages/Sessoes';
import { TipoProduto } from '../pages/TipoProduto';
import { Usuarios } from '../pages/Usuarios';
import { VisualizarProdutos } from '../pages/VisualizarProdutos';

export const Routes: React.FC = () => {

  return(
    <>
      <Switch>
        <Route component={Login} path='/' exact/>
        <Route component={Usuarios} path='/usuarios' exact/>
        <Route component={Sessoes} path='/sessoes' exact />
        <Route component={TipoProduto} path='/tipo-produto' exact />
        <Route component={VisualizarProdutos} path='/produto' exact />
        <Route component={CadastrarProduto} path={'/cadastrar-produto'} exact />
      </Switch>
    </>
  )
}