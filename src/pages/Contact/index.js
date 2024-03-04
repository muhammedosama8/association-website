import { Card, CardBody, Col, Row } from "react-bootstrap";
import phone from '../../assets/phone-icon.svg'
import email from '../../assets/email-icon.svg'
import location from '../../assets/location-icon.svg'
import './style.css'
import { useState } from "react";
import ContactUsService from "../../services/ContactUsService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const initialData = {
    f_name: "",
    l_name: "",
    gmail: "",
    phone: "",
    message: "",
}
const Contact = () => {
    const [formData, setFormData] = useState(initialData)
    const [data, setData] = useState({
        phone: "",
        gmail: "",
        address: ""
    })
    const socialData = useSelector(state=> state?.social)
    const contactUsService = new ContactUsService()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = () => {
        let data = {...formData}
        contactUsService?.create(data).then(res=>{
            if(res?.status === 201){
                toast.success('تم ارسال الرساله بنجاح.')
                setFormData(initialData)
            }
        })
    }
    return <div id='contact-us' className="contact">
        <div className="container">
            <h1 className='title'>
            تواصل معنا
            </h1>
            <Card>
                <CardBody>
                    <Row>
                        <Col md={4} sm={12} className="info">
                            <h3>معلومات الاتصال</h3>
                            <p>قل شيئًا لبدء محادثة مباشرة!</p>
                            <div className="contacts">
                                {!!socialData?.call_us && <p>
                                    <img src={phone} alt='phone' />
                                    {socialData?.call_us}
                                </p>}
                                {socialData?.gmail && <p>
                                    <img src={email} alt='email' />
                                    {socialData?.gmail}
                                </p>}
                                {socialData?.address && <p className="mb-0">
                                    <img src={location} alt='location' />
                                    {socialData?.address}                                </p>}
                            </div>
                        </Col>
                        <Col md={8} sm={12} className="form">
                            <>
                                <Row>
                                    <Col md={6} className='p-3 mb-5'>
                                        <label>الاسم الأول</label>
                                        <input 
                                            type='text'
                                            name='f_name'
                                            value={formData.f_name}
                                            required
                                            onChange={e=> handleChange(e)}
                                        />
                                    </Col>
                                    <Col md={6} className='p-3 mb-5'>
                                        <label>اسم العائلة</label>
                                        <input 
                                            type='text'
                                            name='l_name'
                                            value={formData.l_name}
                                            required
                                            onChange={e=> handleChange(e)}
                                        />
                                    </Col>
                                    <Col md={6} className='p-3 mb-5'>
                                        <label>البريد الإلكتروني</label>
                                        <input 
                                            type='email'
                                            name='gmail'
                                            value={formData.gmail}
                                            required
                                            onChange={e=> handleChange(e)}
                                        />
                                    </Col>
                                    <Col md={6} className='p-3 mb-5'>
                                        <label>رقم الهاتف</label>
                                        <input 
                                            type='number'
                                            name='phone'
                                            value={formData.phone}
                                            required
                                            onChange={e=> handleChange(e)}
                                        />
                                    </Col>
                                    <Col md={12} className='p-3 mb-5'>
                                        <label>الرسالة</label>
                                        <input 
                                            type='text'
                                            name='message'
                                            value={formData.message}
                                            required
                                            onChange={e=> handleChange(e)}
                                        />
                                    </Col>
                                </Row>
                                <div className="submit">
                                    <button type="button" onClick={()=> onSubmit()}>
                                    إرسال
                                    </button>
                                </div>
                            </>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    </div>
}
export default Contact;