import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const NavbarBrand = styled(Navbar.Brand)`
  margin-left: 15px;
`


function HeaderNav() {
  return (
    <Navbar expand="md" sticky="top">
      <NavbarBrand href="#home">ITHelpU</NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Form className="form-position" inline>
            <FormControl bsPrefix="form-control1" as="input" type="text" placeholder="Search" className="mr-sm-2" />
            <Button>Search</Button>
          </Form>
          <Nav.Link >프로젝트</Nav.Link>
          <Nav.Link >멘토</Nav.Link>
          <Nav.Link>고민게시판</Nav.Link>
          <Nav.Link>회원가입</Nav.Link>
          <Nav.Link>로그인</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default HeaderNav;