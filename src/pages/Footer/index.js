import { Col, Row } from "react-bootstrap";
import logo from '../../assets/footer-logo.svg'
import facebook from '../../assets/facebook.svg'
import x from '../../assets/x.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import app from '../../assets/app-store.svg'
import app1 from '../../assets/app.png'
import google1 from '../../assets/google.png'
import './style.css'
import { useSelector } from "react-redux";

const Footer = () => {
    const data = useSelector(state=> state?.social)

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
                            <a href={data?.facebook} target='_blank'>
                                <img src={facebook} alt='facebook' />
                            </a>
                            <a href={data?.instagram} target='_blank'>
                                <img src={instagram} alt='instagram' />
                            </a>
                            <a href={data.twitter} target='_blank'>
                                <img src={x} alt='x' />
                            </a>
                            <a href={data?.you_tube} target='_blank'>
                                <img src={youtube} alt='youtube' />
                            </a>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={12} className="apps">
                    <div>
                        <p>التطبيقات الإلكترونية</p>
                        <div className="icons">
                            <a href={data?.app_store} target='_blank'>
                                <img src={app1} alt='app-store' />
                            </a>
                            <a href={data?.play_store} target='_blank'>
                                <img src={google1} alt='google-store' />
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