import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './style.css'
import ActivitiesAndEventsService from '../../services/ActivitiesAndEventsService';
import Pagination from '../../common/Pagination/Pagination';

const AllActivities = () => {
    const [activity, setActivity] = useState([])
    const activitiesAndEventsService = new ActivitiesAndEventsService()
    const [hasData, setHasData] = useState()
    const [shouldUpdate, setShouldUpdate] = useState(false)
    const [loading, setLoading] = useState(false)

    return <div id='allActivities' className="allActivities">
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
        <Pagination
            setData={setActivity}
            service={activitiesAndEventsService}
            shouldUpdate={shouldUpdate}
            setHasData={setHasData}
            setLoading={setLoading}
        />
        </div>
    </div>
}
export default AllActivities;