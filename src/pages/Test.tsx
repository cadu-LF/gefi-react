import React from 'react';
import {Button} from '../styles';
import {Button2} from '../styles';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import {NavBarArea} from '../styles';
import {DropFull} from '../styles';
import { ImExit } from 'react-icons/im';
import { BiHomeCircle, BiUserCircle,  BiPowerOff } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
/* import Modal from 'react-modal';
import ModalDialog from 'react-bootstrap/ModalDialog';  */

export const Test = () => {
  return (
    <>
      <NavBarArea>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home" className="inicio">GEFI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className="inicio" ><BiHomeCircle size={24}/></Nav.Link>
                    <Nav.Link href="#link" className="inicio"><IoMdNotificationsOutline size={24}/></Nav.Link>
                    <Nav.Link href="#link" className="inicio"><BiUserCircle size={24}/></Nav.Link>
                    <DropFull className="drop dropBack">
                    <NavDropdown title="" id="basic-nav-dropdown" > 
                      <NavDropdown.Item href="#action/3.1" ><BiPowerOff/> Desconectar</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2" ><ImExit/>Sair</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3" >Trocar Usuário</NavDropdown.Item>
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
      



      
















    </>
  )
}

//npm install -D @types/react-modal