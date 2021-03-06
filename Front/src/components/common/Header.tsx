import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import logo from '../../images/header1_1.png';


const NavbarStyle = styled.div`

  display: flex;
  width: auto;

  .navbar {
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    border-bottom: 1px solid #eee;
  }

  .navbar-brand, .navbar-nav .nav-link {
    &:hover {
      color: #0489B1;
    }
  }

  .btn {
    margin-left: 5px;
    background-color: #0489B1;
    border: none;
    &:hover {
      background-color: ${props => props.theme.colors.lightPointColor}
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


  .dropdown {

  }

  p {
    display: flex;
  }


  .dropdown-title {
    background-color: #fff
  }


  // 기석 : 임시로 설정함
  a {
    color: ${props => props.theme.colors.headFontColor};
    font-weight: ${props => props.theme.fontWeight.emphasis};
    font-size: ${props => props.theme.fontSize.medium}
    margin: 0 5px;

    &:hover {
      color: ${props => props.theme.colors.pointColor};
      text-decoration: none;
    }
  }
  .logo {
    width: 100px;
    margin-right: 20px;
  }

`


function Header() {
  return (
    <NavbarStyle>
      <Navbar expand="md" sticky="top">
        <Navbar.Brand href="/"><img className="logo" src={logo} alt="로고" /></Navbar.Brand>
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
            <Nav.Item><Link to="/projects">프로젝트 </Link></Nav.Item>
            <Nav.Item><Link to="/mentors">멘토 </Link></Nav.Item>
            <Nav.Item><Link to="/boards">고민게시판 </Link></Nav.Item>
            <Nav.Item><Link to="/newMentor">멘토 지원 </Link></Nav.Item>
            <Nav.Item><Link to="/signup">회원가입 </Link></Nav.Item>
            <Nav.Item><Link to="/login">로그인 </Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarStyle>


  );
}

export default Header;
