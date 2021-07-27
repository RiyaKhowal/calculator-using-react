import './Calculator.css';
import  React, { useState,useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator() {
  
  
   const [result,setResult]=useState(" ");
   //const inputRef =useRef(document.createElement("div"));
  
    
   //useEffect(() => inputRef.current.focus());
    
   function clickedValue(event:any){
            setResult( result +event.target.value);
          }
     
   
    function backspace(){
      setResult("");
    }
    function remove1digit(){
      setResult(result.slice(0,-1)); //-1 is last value from Rhs so it removes the last value 
    }

    function calulate(){
      try{
      setResult(eval(result)); //eval give result by calculating values
      }
      catch(error){
      setResult("error");
      }
   
    }
 

    return (
        <div className="col-sm-12 -md-10" >
          <div className="design">
            <Row >
                <Col  className="styling md={10} sm={12}" >
               

  <Form className="mb-2 md={10} sm={12}">
    <input className="input" type="text" value={result} />
  </Form>
        
        </Col>
    </Row>
    
    <Row>
        <Col className="but md={10} sm={12}">
    <ButtonGroup size="lg" className="mb-2 but">
    <Button value="7" size="lg" onClick={clickedValue} variant="danger" >7</Button>
    <Button value="8" onClick={clickedValue} variant="danger">8</Button>
    <Button value="9" onClick={clickedValue} variant="danger">9</Button>
    <Button value="-" onClick={clickedValue}  variant="info">-</Button>
  </ButtonGroup>
  </Col>
  </Row>

  <Row>
        <Col className="but md={10} sm={12}">
    <ButtonGroup size="lg" className="mb-2 but">
    <Button value="4" onClick={clickedValue} variant="danger">4</Button>
    <Button value="5" onClick={clickedValue} variant="danger">5</Button>
    <Button  value="6" onClick={clickedValue} variant="danger">6</Button>
    <Button  value="/" onClick={clickedValue} variant="info">/</Button>
  </ButtonGroup>
  </Col>
  </Row>
  <Row>
        <Col>
    <ButtonGroup size="lg" className="mb-2 but md={10} sm={12}">
    <Button value="1" onClick={clickedValue} variant="danger">1</Button>
    <Button value="2" onClick={clickedValue} variant="danger">2</Button>
    <Button value="3" onClick={clickedValue} variant="danger">3</Button>
    <Button value="*" onClick={clickedValue} variant="info">*</Button>
  </ButtonGroup>
  </Col>
  </Row>
  <Row>
        <Col>
    <ButtonGroup size="lg" className="mb-2 but md={10} sm={12}">
    <Button value="0" onClick={clickedValue} variant="danger">0</Button>
    <Button value="." onClick={clickedValue} variant="danger">.</Button>
    <Button  value="=" onClick={calulate}  variant="danger">=</Button>
    <Button value="+" onClick={clickedValue} variant="info">+</Button>
  </ButtonGroup>
  </Col>
  </Row>

  <Row>
        <Col>
    <ButtonGroup size="lg" className="mb-2 but md={10} sm={12}">
    <Button  onClick={backspace} variant="danger">clear</Button>
    <Button onClick={remove1digit} variant="info">C</Button>
    
  </ButtonGroup>
  </Col>
  </Row>
  </div>


        </div>
    )
}

export default Calculator








