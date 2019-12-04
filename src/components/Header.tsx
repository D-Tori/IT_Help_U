import React from 'react';
// import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const NavbarStyle = styled.div`

  
  .navbar {
    width: 100%;
    background-color: #ffffff;
    position: fixed;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #111;

    &:hover {
      color: #5457ff;
    }
  }

  .btn {
    margin-left: 5px;
    background-color: #5457ff;
    border: none;
    &:hover {
      background-color: #4a47d5;
    }
  }

  .search:focus {
    outline: none;
  }

  @media (max-width: 767px) {
  .search {
    padding: 5px 10px;
    width: 250px;
    border: 1px solid #eee;
    border-radius: 20px;
  }
  .form-inline {
    margin-top: 10px;
  }
}

  @media (min-width: 768px) {
    .search {
      padding: 5px 10px;
      width: 190px;
      border: 1px solid #eee;
      border-radius: 20px;
    }
    
  }

}


`


function Header() {
  return (
    <NavbarStyle>
      <Navbar expand="md" sticky="top">
        <Navbar.Brand href="/">ITHelpU</Navbar.Brand>
        <Nav className="d-none d-md-block">
          <Form className="justify-content-sm-between" inline>
            <FormControl bsPrefix="search" as="input" type="text" placeholder="Search" className="mr-sm-2" />
            <Button>Search</Button>
          </Form>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form className="d-md-none d-lg-none d-sm-block" inline>
              <FormControl bsPrefix="search" as="input" type="text" placeholder="Search" className="mr-sm-2" />
              <Button >Search</Button>
            </Form>
            <Nav.Item><Nav.Link >프로젝트</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link >멘토</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link >고민게시판</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/signup">회원가입</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/login">로그인</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarStyle>


  );
}

export default Header;