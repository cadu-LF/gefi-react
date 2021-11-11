import React from "react";
import {Link} from "react-router-dom";

import styled, {
  css,
  ThemeProvider,
  createGlobalStyle
} from "styled-components";

export const theme = {
  colors: {
    primary: "#FFEA34"
  }
};

export const Text = styled.span`
  color: #000;
  display: block;
`;

export const Button = styled.button`
  font-size: 16px;
  color: #fff;
  width: 80px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background: #000;
  margin: 10px;
  

  &:hover {
    transition: 0.4s;
    cursor: pointer;
    font-size: 22px;
  }

`;

export const Button2 = styled.button` 
  font-size: 32px;
  width: 500px;
  height: 100px;
  border: none;
  border-radius: 10px;
  background: #FFEA34;
  margin: 10px;
  

  &:hover {
    transition: 0.4s;
    cursor: pointer;
    background: #FDE301;
  }

`;

export const Button3 = styled.button`
  font-size: 16px;
  color: #fff;
  width: 80px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background: #000;
  margin: 10px;
  

  &:hover {
    transition: 0.4s;
    cursor: pointer;
    font-size: 22px;
  }

`;

export const NavBarArea = styled.div`
  
  nav{
    background: #000 !important;
  };
  .inicio{
    color: #FFEA34 !important;
  }
  .drop a{
    color: #FFEA34 !important;
  }
  #basic-navbar-nav div{
    margin: 0 0 0 auto !important;
    
  }
  
`;

export const DropFull = styled.div`
  .dropBack{
    background: #000 !important;
  }
  
  
  
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    label {
      float:left;
      display: flex;
      width: 100px;
    }
    input {
      margin-left: 0px;
      width: 300px;
    }
    button{
      width: 160px;
    background-color: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      color: #654724;
    }
    }
  }
`;


export const TabelaVencimentoRegistro = styled.table`
  margin-top: 50px;
  th {
    padding: 20px;
    border-bottom: 1px solid black;
  }
  td {
    padding: 20px;
    border-bottom: 1px solid black;
    button {
      border:none;
    }
  }
  
`;
export const TabelaVencimentoMensalidade = styled.table`
  margin-top: 50px;
  th {
    padding: 20px;
    border-bottom: 1px solid black;
  }
  td {
    padding: 20px;
    border-bottom: 1px solid black;
    button {
      border:none;
    }
  }
  
`;
export const TabelaCadastro = styled.table`
  margin-top: 50px;
  th {
    padding: 20px;
    border-bottom: 1px solid black;
  }
  td {
    padding: 20px;
    border-bottom: 1px solid black;
    button {
      border:none;
    }
  }
  
`;
export const TabelaCompras = styled.table`
  margin-top: 50px;
  th {
    padding: 20px;
    border-bottom: 1px solid black;
  }
  td {
    padding: 20px;
    border-bottom: 1px solid black;
    button {
      border:none;
    }
  }
  
`;