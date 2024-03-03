import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import header from '../../assets/header.jpeg';
import Pagination from "../../common/Pagination/Pagination";
import './style.css'
import NewsService from "../../services/NewsService";


const AllNews = () =>{
    const [data, setData] = useState([])
    const [hasData, setHasData] = useState()
    const [shouldUpdate, setShouldUpdate] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const newsService = new NewsService()

    return <div style={{marginTop:'68px'}}>
            <div className="container">
            <div className="all-news">
                <h1 className='title'>
                    أخبار الجمعية
                </h1>
                <Row className='mt-5'>
                    {data?.map((prod, index) => (
                        <Col md={4} className='mb-3 cursor-pointer' key={index} onClick={()=> navigate('/news/new', {state: prod})}>
                        <div className="new-card border-round p-3">
                            <div className='p-2'>
                                <div className="mb-3">
                                    <img src={prod.image} alt={prod.name} height='133' className="w-100 shadow-2" />
                                </div>
                                <div>
                                    <p className="card-title">{prod.title}</p>
                                    <p className="card-description">{prod.description}</p>
                                </div>
                            </div>
                        </div>
                        </Col>
                    ))}
                </Row>

                <Pagination
                  setData={setData}
                  service={newsService}
                  shouldUpdate={shouldUpdate}
                  setHasData={setHasData}
                  setLoading={setLoading}
                />
            </div>
            </div>
    </div>
}
export default AllNews