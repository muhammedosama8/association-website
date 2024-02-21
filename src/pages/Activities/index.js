import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../assets/activity-logo.svg'
import boat from '../../assets/boat.svg'
import iland from '../../assets/iland.svg'
import tickets from '../../assets/tickets.svg'
import bar from '../../assets/bar.svg'
import house from '../../assets/house.svg'
import './style.css'

const Activities = () => {
    const [activity, setActivity] = useState([])
    useEffect(()=>{
        setActivity([
            {logo: logo, title: 'الخيم الرمضانيه', description: 'خلافًا للاعتقاد الشائع، فإن إيبسوم ليس مجرد نص عشوائي. ,لها جذور في قطعة.'},
            {logo: boat, title: 'رحلات بحريه', description: 'خلافًا للاعتقاد الشائع، فإن إيبسوم ليس مجرد نص عشوائي. ,لها جذور في قطعة.'},
            {logo: iland, title: 'جزيرة فليكا', description: 'خلافًا للاعتقاد الشائع، فإن إيبسوم ليس مجرد نص عشوائي. ,لها جذور في قطعة.'},
            {logo: tickets, title: 'تذاكر ترفيهية', description: 'خلافًا للاعتقاد الشائع، فإن إيبسوم ليس مجرد نص عشوائي. ,لها جذور في قطعة.'},
            {logo: bar, title: 'اشتراكات صالات رياضية', description: 'خلافًا للاعتقاد الشائع، فإن إيبسوم ليس مجرد نص عشوائي. ,لها جذور في قطعة.'},
            {logo: house, title: 'شاليهات', description: 'خلافًا للاعتقاد الشائع، فإن إيبسوم ليس مجرد نص عشوائي. ,لها جذور في قطعة.'},
        ])
    },[])
    return <div id='activities' className="activities">
        <div className='container'>
        <h1 className='title'>
            الأنشطة والفاعليات
        </h1>
        <Row className='activities-card'>
            {activity?.map((item, index)=>{
                return <Col md={4} key={index} data-aos="flip-down">
                    <div className='activity-card'>
                        <img src={item?.logo} alt={item?.title} width='100' height='100' />
                        <h4>{item?.title}</h4>
                        <p>{item?.description}</p>
                    </div>
                </Col>
            })}
        </Row>
        </div>
    </div>
}
export default Activities;