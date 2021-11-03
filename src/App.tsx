import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Hello World</h1>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
