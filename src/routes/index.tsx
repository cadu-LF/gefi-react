// yarn add react-router-dom
// yarn add -D @types/react-router-dom
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Test } from '../pages/Test';

export const Routes: React.FC = () => {

  return(
    <Switch>
      <Route component={Test} path='/' exact/>
    </Switch>
  )
}