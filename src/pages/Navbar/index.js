import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg'
import './style.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" height='60px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">
                الرئيسية
            </Nav.Link>
            <Nav.Link href="#activities">
                الأنشطة والفاعليات
            </Nav.Link>
            <Nav.Link href="#markets">الفروع والأسواق</Nav.Link>
            <Nav.Link href="#news">أخبار الجمعية</Nav.Link>
            <Nav.Link href="#contact-us">اتصل بنا</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;