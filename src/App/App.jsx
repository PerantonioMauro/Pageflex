import React, { useState } from 'react';
import './App.css';
import '../Header/Header';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import '../Precios/Precios'


function App(){

  const [abierto, setAbierto] = useState(false)
  const abrirModal=()=>{
    setAbierto(!abierto)
  }


 
  return (
    <>

    <div className='Modal'>
    <Modal isOpen={abierto}>
      <ModalHeader className='modalheader'>
       <div className='closebutton'><button onClick={abrirModal}>X</button></div>
        <img
        className='imgpopup'
        alt='logo'
        src='/Materiales/logo-blanco.PNG'/>
       <div><h1>Ingresa a tu cuenta</h1></div>
        <div><span>Y empeza a conseguir resultados</span></div>

      </ModalHeader>
      <div className='modalbody'>
      <ModalBody>
        <FormGroup>
          <Label for="usuario">Correo</Label>
          <Input type='email' id='email' name='email'/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Contraseña</Label>
          <Input type='password' id='password' name='password'/>
        </FormGroup>
      </ModalBody>

      <ModalFooter>
        <button>Ingresar</button>
        <span>Aun no tienes cuenta?<a>Registrate</a></span>


      </ModalFooter>

      </div>
    </Modal>
    </div>
    <div className="App">
      <header className="header">
        <div>
          <img
            className='logoverde'
            src="/Materiales/logo-verde.PNG" />
          <h1>Flex</h1>
        </div>
        <div>
          <ul className='listhead'>
            <li className='listhead'>Producto</li>
            <li className='listhead'>Caracteristicas</li>
            <li className='listhead'>Precios</li>
          </ul>
        </div>
        <div className='btns'>
          
          <button className='btn1' onClick={abrirModal}>Ingresar</button>
          <button className='btn2'>Registrarse</button>
        </div>
      </header>
    </div>
    
    
    </>
  );
}

export default App;
