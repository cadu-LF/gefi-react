import React from 'react';
import {Button} from '../styles'
import {Button2} from '../styles'
import {Button3} from '../styles'
import Modal from 'react-modal';
import ModalDialog from 'react-bootstrap/ModalDialog';

export const Test = () => {
  return (
    <>
      <h1>Página para testes dos componentes</h1>
      <Button>Entrar</Button>
      
      <Button2>Cadastrar Membros</Button2>
      <Button2>Visualizar Cadastros</Button2>
      
      <Button2>Menu Financeiro</Button2>
      
      <Button2>Cadastrar Compras</Button2>
      <Button2>Visualizar Compras Por Membro</Button2>
      
      <Button2>Visualizar Vencimento Do Registro</Button2>
      
      <Button2>Visualizar Vencimento Das Mensalidades</Button2>

      <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button3 variant="secondary">Close</Button3>
            <Button3 variant="primary">Save changes</Button3>
          </Modal.Footer>
      </Modal.Dialog>
      



      
















    </>
  )
}