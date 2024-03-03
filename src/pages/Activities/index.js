import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './style.css'
import ActivitiesAndEventsService from '../../services/ActivitiesAndEventsService';
import { Link } from 'react-router-dom';

const Activities = () => {
    const [activity, setActivity] = useState([])
    const activitiesAndEventsService = new ActivitiesAndEventsService()
    const limit = 6

    useEffect(()=>{
        let obj ={
            offset: 0,
            limit
        }
        activitiesAndEventsService.getList(obj).then(res=>{
            if(res?.status === 200){
                setActivity(res?.data?.data?.data)
            }
        }).catch(e=> console.log(e))
    },[])

    return <div id='activities' className="activities">
        <div className='container'>
        <h1 className='title'>
            الأنشطة والفاعليات
        </h1>
        <Row className='activities-card'>
            {activity?.map((item, index)=>{
                return <Col md={4} sm={12} key={index} data-aos="flip-down">
                    <div className='activity-card'>
                        <img src={item?.image} alt={item?.title} width='100' height='100' />
                        <h4>{item?.title}</h4>
                        <p>{item?.description}</p>
                    </div>
                </Col>
            })}
        </Row>
        <div className='more text-center mt-5'>
            <Link to='/activities'>المزيد</Link>
        </div>
        </div>
    </div>
}
export default Activities;