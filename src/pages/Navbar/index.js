import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './style.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="Logo" height='60px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <NavLink to="/" className='nav-link'>
                الرئيسية
            </NavLink>
            <NavLink to="/activities" className='nav-link'>
                الأنشطة والفاعليات
            </NavLink>
            <NavLink to="/markets" className='nav-link'>الفروع والأسواق</NavLink>
            <NavLink to="/news" className='nav-link'>أخبار الجمعية</NavLink>
            <NavLink to="/contact-us" className='nav-link'>اتصل بنا</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;