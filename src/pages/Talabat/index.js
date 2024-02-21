import { Col, Row } from 'react-bootstrap';
import talabat from '../../assets/talabat.png'
import './style.css'

const Talabat = () => {
    return <div className="talabat">
        <div className='container'>
            <Row>
                <Col md={4} data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <img src={talabat} alt='talabat' className='talabat-img' />
                </Col>
                <Col md={8}>
                    <p className='title'>اطلب الحين منتجات جمعية صباح السالم من تطبيق طلبات</p>
                    <div  className='order-now'>
                        <button>اطلب الآن</button>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
}
export default Talabat;