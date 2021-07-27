import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Calculator from './Calculator/Calculator';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <Header/>
      <Container>
      <p className='mt-5 md={10} sm={12}'  ><Calculator/></p>
      </Container>
    </div>
  )
}

export default App

