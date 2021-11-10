// yarn add react-router-dom
// yarn add -D @types/react-router-dom
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nova } from '../pages/Nova';
import { Test } from '../pages/Test';
import { Vizualizar } from '../pages/Vizualizar';

export const Routes: React.FC = () => {

  return(
    <>
      <Switch>
        <Route component={Test} path='/' exact/>
        <Route component={Nova} path='/nova' exact />
        <Route component={Vizualizar} path='/visualizar' exact />
      </Switch>
    </>
  )
}