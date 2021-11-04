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
  padding: 12px;
  border: 0;
  background: #FFEA34;
  

  &:hover {
    opacity: 0.5;
  }

`;

export const Button2 = styled.button`
  padding: 12px;
  border: 0;
  background: #FFEA34;
  

  &:hover {
    opacity: 0.5;
  }

`;

export const Button3 = styled.Link`
  padding: 12px;
  border: 0;
  background: #FFEA34;
  

  &:hover {
    opacity: 0.5;
  }

`;

//git push origin lorena