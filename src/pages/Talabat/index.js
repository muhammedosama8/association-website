import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import talabat from '../../assets/talabat.png'
import './style.css'

const Talabat = () => {
    const socialData = useSelector(state=> state?.social)
    return <div className="talabat">
        <div className='container'>
            <Row>
                <Col md={4} sm={12} data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000">
                    <img src={talabat} alt='talabat' className='talabat-img' />
                </Col>
                <Col md={8} sm={12}>
                    <p className='title'>اطلب الحين منتجات جمعية صباح السالم من تطبيق طلبات</p>
                    <div  className='order-now'>
                        <a href={socialData?.talabat} target='_blank'>اطلب الآن</a>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
}
export default Talabat;