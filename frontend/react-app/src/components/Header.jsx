import React, { Component } from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

class Header extends Component {

    render() { 
        return (  
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">  <i className="fa fa-snowflake-o" style={{ fontSize: '1.5em' }} /> &nbsp; Micro Developer </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#pricing"><strong> &nbsp; &nbsp; &nbsp; Hello  Alex</strong></Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="/microservices"><strong>View All Microservices</strong></Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="/mapping"><strong>Mappings</strong></Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
          </Navbar>
        );
    }
}
 
export default Header;