import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import EmpForm from './EmpForm';
import EmpList from './EmpList';
import TaskList from './TaskList';


export default class NavbarComp extends Component {
  
  render() {
    return (
      
        <BrowserRouter>
        <Navbar bg="dark"variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand href="#home">EWS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/EmpForm"}>ADD Employee</Nav.Link>
              <Nav.Link as={Link} to={"/EmpList"}>Employee List</Nav.Link>
              <NavDropdown title="TaskList" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"TaskList"}>Tasks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Assign Task
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div>
        </div>
        <Routes>
            <Route path = "/EmpForm" element={<EmpForm />}/>
            <Route path = "/Emplist" element={<EmpList />}/>
            <Route path = "/TaskList" element={<TaskList />}/>
          </Routes>
      </Navbar>
      </BrowserRouter>
      
    )
  }
}
