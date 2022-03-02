import React from "react";
import {Navbar, Container, Nav, NavDropdown, Alert, Row, Col} from 'react-bootstrap';
import './App.css';


function NavBar(){

return(<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>)
}

function Alarm(){
    return(
        <Alert variant="success">
  <Alert.Heading>SUBWAY</Alert.Heading>
  <p> Real Diet Food </p>
  <p className="mb-0"> choose one </p>
</Alert>
    )
};
function Card(props){
  return(
    <Container>
  <Row>
        <Col md='auto'>{props.sub.photo}</Col>
        <Col sm> {props.sub.title}     </Col>
        <Col sm> {props.sub.kcal} Kcal</Col>
        <Col sm> {props.sub.price} won </Col>
  </Row>
</Container>)
}

export {NavBar,Alarm,Card};
 
