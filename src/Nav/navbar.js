import React from 'react'
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
const TopNavbar = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Top Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link  to='/table'>Face</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to='/addTable'>Add Face </Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link  to='/signup'>SignUp</Link></Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link><Link to='/editTable'>Edit Face </Link></Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Container>
      </Navbar>
      

    </>
  )
}

export default TopNavbar