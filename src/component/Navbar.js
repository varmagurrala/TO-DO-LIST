import React from "react";
import Nav from 'react-bootstrap/Nav';
import  img from '../assets/images/trysolLogo.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Navbar(){
    const imgsty ={
        "height":"60px",
        "width":"60px"
    };
    return(

        <div className="Navbar" >

        <Container >
        <Row>
          <Col>        <a className="navbar-brand" href="https://trysol.com/"><img  src={img} alt="Italian Trulli" style={imgsty} /></a>
          </Col>
          <Col> <Nav  className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
  </Col>
        </Row>
        </Container>


       

        </div>

    )

    
}
export default Navbar;