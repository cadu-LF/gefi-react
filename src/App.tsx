import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import {Sidebar} from './components/Sidebar/Sidebar'
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
