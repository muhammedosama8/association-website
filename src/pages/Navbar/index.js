import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo1.png'
import './style.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img src={logo} alt="Logo" height='60px' />
          </NavLink>
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
            <NavLink to="/offers" className='nav-link'>عروض الجمعية</NavLink>
            <NavLink to="/news" className='nav-link'>أخبار الجمعية</NavLink>
            <NavLink to="/contact-us" className='nav-link'>اتصل بنا</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;