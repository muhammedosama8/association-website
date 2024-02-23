import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import header from '../../assets/header.jpeg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import Pagination from "../../common/Pagination/Pagination";
import Contact from "../Contact";
import Talabat from "../Talabat";
import './style.css'

const AllMarkets = () =>{
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        setData([
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 5, phone: '12333222'},
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 4, phone: '12333222'},
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 2, phone: '12333222'},
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 3, phone: '12333222'},
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 6, phone: '12333222'},
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 7, phone: '12333222'},
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 8, phone: '12333222'},
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 9, phone: '12333222'},
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 12, phone: '12333222'},
            {img: header, title: 'اسم السوق او الفرع', location: 'شارع الهوارى' , hours: 12, phone: '12333222'},
        ])
    },[])

    return <div style={{marginTop:'68px'}}>
            <div className="container">
            <div className="all-markets">
                <h1 className='title'>
                الفروع والأسواق 
                </h1>
                <Row>
                    {data?.map((prod, index) => (
                        <Col className="mb-3" md={4} key={index} onClick={()=> navigate('/markets/market', {state: prod})}>
                        <div className='m-4'>
                        <div className="allmarket-card border-round p-3">
                            <div className='p-2'>
                                <div className="mb-3">
                                    <img src={prod.img} alt={prod.name} height='133' className="w-100 shadow-2" />
                                </div>
                                <div>
                                <div>
                                    <p className="hours">
                                    مواعيد العمل: {prod.hours} ساعة عمل
                                    </p>
                                    <hr />
                                    <p className="card-title">{prod.title}</p>
                                    <p className="card-location">
                                        <img src={location} alt='location' />
                                        {prod.location}
                                    </p>
                                    <p className="card-phone">
                                        <img src={phone} alt='phone' />
                                        {prod.phone}
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </Col>
                    ))}
                </Row>

                {/* <Pagination
                  setData={setData}
                  service={adminService}
                  shouldUpdate={shouldUpdate}
                  setHasData={setHasData}
                  setLoading={setLoading}
                /> */}
            </div>
                <Talabat />
                <Contact />
            </div>
    </div>
}
export default AllMarkets