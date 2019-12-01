import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const NavbarBrand = styled(Navbar.Brand)`
  margin-left: 15px;
`


function HeaderNav() {
  return (
    <Navbar bg="#fff" expand="lg">
      <NavbarBrand href="#home">ITHelpU</NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link bsPrefix="nav-top">프로젝트</Nav.Link>
          <Nav.Link bsPrefix="nav-top">멘토</Nav.Link>
          <Nav.Link bsPrefix="nav-top">고민게시판</Nav.Link>
          <Nav.Link bsPrefix="nav-top">회원가입</Nav.Link>
          <Nav.Link bsPrefix="nav-top nav-top-end">로그인</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}

export default HeaderNav;