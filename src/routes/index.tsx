// yarn add react-router-dom
// yarn add -D @types/react-router-dom
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CadastrarCompra } from '../pages/CadastrarCompra';
import { CadastrarMembro } from '../pages/CadastrarMembro';
import { CadastrarProduto } from '../pages/CadastrarProduto';
import { CadastrarResponsavel } from '../pages/CadastrarResponsavel';
import { CadastrarTipoProduto } from '../pages/CadastrarTipoProduto';
import { Nova } from '../pages/Nova';
import { Sessoes } from '../pages/Sessoes';
import { Test } from '../pages/Test';
import { Visualizar } from '../pages/Visualizar';
import { VisualizarCadastro } from '../pages/VisualizarCadastro';
import { VisualizarCompra } from '../pages/VisualizarCompra';
import { VisualizarMensalidades } from '../pages/VisualizarMensalidades';
import { VisualizarRegistro } from '../pages/VisualizarRegistro';

export const Routes: React.FC = () => {

  return(
    <>
      <Switch>
        <Route component={Test} path='/' exact/>
        <Route component={Nova} path='/nova' exact />
        <Route component={Sessoes} path='/sessoes' exact />
        <Route component={Visualizar} path='/visualizar' exact />
        <Route component={CadastrarCompra} path='/cadastrar-compra' exact />
        <Route component={CadastrarMembro} path='/cadastrar-membro' exact />
        <Route component={CadastrarProduto} path='/cadastrar-produto' exact />
        <Route component={VisualizarCompra} path='/visualizar-compra' exact />
        <Route component={VisualizarCadastro} path='/visualizar-cadastro' exact />
        <Route component={VisualizarRegistro} path='/visualizar-registro' exact />
        <Route component={CadastrarResponsavel} path='/cadastrar-responsavel' exact />
        <Route component={CadastrarTipoProduto} path='/cadastrar-tipo-produto' exact />
        <Route component={VisualizarMensalidades} path='/visualizar-mensalidades' exact />
      </Switch>
    </>
  )
}