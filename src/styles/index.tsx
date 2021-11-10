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



/* export const Button3 = styled(Link)`
  padding: 12px;
  border: 0;
  background: #FFEA34;
  

  &:hover {
    opacity: 0.5;
  }

`;  */

//git push origin lorena