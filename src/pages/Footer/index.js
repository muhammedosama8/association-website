import { Col, Row } from "react-bootstrap";
import logo from '../../assets/footer-logo.svg'
import facebook from '../../assets/facebook.svg'
import x from '../../assets/x.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import app from '../../assets/app-store.svg'
import google from '../../assets/google-store.svg'
import './style.css'

const Footer = () => {
    return <div className="footer">
        <div className="container">
            <Row>
                <Col md={4} sm={12} className="logo">
                    <img src={logo} alt='logo' />
                </Col>
                <Col md={4} sm={12} className="social">
                    <div>
                        <p>تابعنا علي</p>
                        <div className="icons">
                            <a href=''>
                                <img src={facebook} alt='facebook' />
                            </a>
                            <a href=''>
                                <img src={instagram} alt='instagram' />
                            </a>
                            <a href=''>
                                <img src={x} alt='x' />
                            </a>
                            <a href=''>
                                <img src={youtube} alt='youtube' />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} className="apps">
                    <div>
                        <p>التطبيقات الإلكترونية</p>
                        <div className="icons">
                            <a href=''>
                                <img src={app} alt='app-store' />
                            </a>
                            <a href=''>
                                <img src={google} alt='google-store' />
                            </a>
                        </div>
                        <a href=''>سياسة الخصوصية</a>
                    </div>
                </Col>
            </Row>
            <hr />
            <div>
                <p className="text-center mb-0 power">Powered By 
                <a 
                    href='https://www.leapsolutionskw.com' 
                    target='_blank'
                    style={{
                        color: '#fff',
                        textDecoration: 'none',
                        margin: '0 4px'
                    }}
                >Leap solutions kw</a>
                &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
    </div>
}
export default Footer;