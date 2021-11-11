import React from "react";
import { Button, Button2, TabelaVencimentoRegistro, TabelaVencimentoMensalidade, TabelaCompras, TabelaCadastro, Form} from "../styles";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { NavBarArea } from "../styles";
import { DropFull } from "../styles";
import { ImExit } from "react-icons/im";
import { BiHomeCircle, BiUserCircle } from "react-icons/bi"; //BiPowerOff
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUserSwitch } from "react-icons/ai";
/* import Modal from 'react-modal';
import ModalDialog from 'react-bootstrap/ModalDialog';  */

export const Test = () => {
  return (
    <>
      <NavBarArea>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="inicio">
              GEFI
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="inicio">
                  <BiHomeCircle size={24} />
                </Nav.Link>
                <Nav.Link href="#link" className="inicio">
                  <IoMdNotificationsOutline size={24} />
                </Nav.Link>
                <Nav.Link href="#link" className="inicio">
                  <BiUserCircle size={24} />
                </Nav.Link>
                <DropFull className="drop dropBack">
                  <NavDropdown title="" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">
                      <ImExit />
                      Sair
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <AiOutlineUserSwitch />
                      Trocar Usuário
                    </NavDropdown.Item>
                  </NavDropdown>
                </DropFull>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </NavBarArea>

      <h1>Página para testes dos componentes</h1>
      <Button>Entrar</Button>

      <Button2>Cadastrar Membros</Button2>
      <Button2>Visualizar Cadastros</Button2>

      <Button2>Menu Financeiro</Button2>

      <Button2>Cadastrar Compras</Button2>
      <Button2>Visualizar Compras Por Membro</Button2>

      <Button2>Visualizar Vencimento Do Registro</Button2>

      <Button2>Visualizar Vencimento Das Mensalidades</Button2>

      {/* <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
      </Modal.Dialog> */}
      {/*  <NavDropdown.Item href="#action/3.1" ><BiPowerOff/> Desconectar</NavDropdown.Item> */}

        <Form>
          <div>
            <label>
              Nome:  <br />
              <input type="text" name="name" />
            </label>
            <label>
              Número Registro: <br />
              <input type="text" name="ueb" placeholder="599106-4" />
            </label>
            <label>
              Seção: <br />
              <select name="select">
                <option value="valor1">Alcáteia Amarela</option>
                <option value="valor2" selected>Alcáteia Branca</option>
                <option value="valor3">Alcáteia Preta</option>
                <option value="valor4">Tropa I</option>
                <option value="valor5" selected>Tropa II</option>
                <option value="valor6">Tropa III</option>
                <option value="valor7">Tropa Sênior</option>
                <option value="valor8" selected>Clã Pioneiro</option>
                <option value="valor9">Chefia</option>
              </select>
            </label>
            <label>
              Nome Responsável: <br />
              <input type="text" name="name" />
            </label>
            <label>
              Nome celular: <br />
              <input type="text" name="celular" />
            </label>
          </div>
          <div>
            <label>
              Produto: <br />
              <input type="text" name="name" placeholder="lenço"/>
            </label>
            <label>
              Quantidade: <br />
              <input type="number" name="qtde"/>
            </label>
            <label>
              Valor: <br />
              <input type="text" name="preco"/>
            </label>
            <label>
              Descrição(obs): <br />
              <input type="textarea" name="obs"/>
            </label>
          </div>
        </Form> 
        <Button>Enviar</Button>
    


      <TabelaVencimentoRegistro>
        <thead>
          <tr>
            <th> Número Registro </th>
            <th> Nome Membro </th>
            <th> Email Responsável </th>
            <th> Tel. Resposável </th>
            <th> Nome Responsável </th>
            <th> Vencimento Registro </th>
            <th> Vencimento Mensalidade </th>
          </tr>
        </thead>
        <tbody>
          <h4>Tabela Vencimento Registro</h4>
        </tbody>
      </TabelaVencimentoRegistro>

      <TabelaVencimentoMensalidade>
        <thead>
          <tr>
            <th> Número Registro </th>
            <th> Nome Membro </th>
            <th> Email Responsável </th>
            <th> Tel. Resposável </th>
            <th> Nome Responsável </th>
            <th> Vencimento Registro </th>
            <th> Vencimento Mensalidade </th>
          </tr>
        </thead>
        <tbody>
          <h4>Tabela Vencimento Mensalidade</h4>
        </tbody>
      </TabelaVencimentoMensalidade>

      <TabelaCadastro>
        <thead>
          <tr>
            <th> Número Registro </th>
            <th> Nome Membro </th>
            <th> Email Responsável </th>
            <th> Tel. Resposável </th>
            <th> Nome Responsável </th>
            <th> Vencimento Registro </th>
            <th> Vencimento Mensalidade </th>
          </tr>
        </thead>
        <tbody>
          <h4>Tabela Cadastro</h4>
        </tbody>
      </TabelaCadastro>

      <TabelaCompras>
        <thead>
          <tr>
            <th> Número Registro </th>
            <th> Nome Membro </th>
            <th> Produto </th>
            <th> Valor </th>
            <th> Qtde </th>
            <th> Tel. Resposável </th>
            <th> Nome Responsável </th>
            <th> Data Compra </th>
          </tr>
        </thead>
        <tbody>
          <h4>Tabela compras</h4>
        </tbody>

      </TabelaCompras>







    </>
  );
};

//npm install -D @types/react-modal


