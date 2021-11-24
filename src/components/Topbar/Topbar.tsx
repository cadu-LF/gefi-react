import React from 'react';

import { DropFull, NavBarArea } from '../../styles';

import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";

import { BiHomeCircle, BiUserCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { Sidebar } from '../Sidebar/Sidebar';

export const Topbar: React.FC = () => {
  return (
    <NavBarArea>
      <Sidebar />
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
  )
}
