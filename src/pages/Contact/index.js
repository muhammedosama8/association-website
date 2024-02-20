import { Button, Card, CardBody, Col, Row } from "react-bootstrap";
import phone from '../../assets/phone-icon.svg'
import email from '../../assets/email-icon.svg'
import location from '../../assets/location-icon.svg'
import './style.css'

const Contact = () => {
    return <div className="contact">
        <div className="container">
            <h1 className='title'>
            تواصل معنا
            </h1>
            <Card>
                <CardBody>
                    <div className="d-flex">
                        <div className="info">
                            <h3>معلومات الاتصال</h3>
                            <p>قل شيئًا لبدء محادثة مباشرة!</p>
                            <div className="contacts">
                                <p>
                                    <img src={phone} alt='phone' />
                                    +1012 3456 789
                                </p>
                                <p>
                                    <img src={email} alt='email' />
                                    demo@gmail.com
                                </p>
                                <p className="mb-0">
                                    <img src={location} alt='location' />
                                    132 شارع دارتموث بوسطن، ماساتشوستس 02156 الولايات المتحدة
                                </p>
                            </div>
                        </div>
                        <div className="form">
                            <form>
                                <Row>
                                    <Col md={6} className='p-3 mb-5'>
                                        <label>الاسم الأول</label>
                                        <input 
                                            type='text'
                                            name='first-name'
                                        />
                                    </Col>
                                    <Col md={6} className='p-3 mb-5'>
                                        <label>اسم العائلة</label>
                                        <input 
                                            type='text'
                                            name='last-name'
                                        />
                                    </Col>
                                    <Col md={6} className='p-3 mb-5'>
                                        <label>البريد الإلكتروني</label>
                                        <input 
                                            type='email'
                                            name='email'
                                        />
                                    </Col>
                                    <Col md={6} className='p-3 mb-5'>
                                        <label>رقم الهاتف</label>
                                        <input 
                                            type='number'
                                            name='phone'
                                        />
                                    </Col>
                                    <Col md={12} className='p-3 mb-5'>
                                        <label>الرسالة</label>
                                        <input 
                                            type='text'
                                            name='message'
                                        />
                                    </Col>
                                </Row>
                                <div className="submit">
                                    <button type="submit">
                                    إرسال
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    </div>
}
export default Contact;