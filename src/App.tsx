import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Topbar } from './components/Topbar/Topbar';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
