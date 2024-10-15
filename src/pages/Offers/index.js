import { useState } from "react"
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";
import OfferService from "../../services/OfferService";
import './style.css'

const Offers = () =>{
    const tabs = [
        {label: 'عروض الخدمة', value: "service offers"},
        {label: 'العروض الاجتماعية', value: "social offers"}
    ]
    const [selectedTab, setSelectedTab] = useState(tabs[0])
    const [data, setData] = useState([])
    const [hasData, setHasData] = useState(null)
    const [shouldUpdate, setShouldUpdate] = useState(false)
    const [loading, setLoading] = useState(false)
    const offerService = new OfferService()

    return <div style={{marginTop:'68px'}}>
            <div className="container">
            <div className="offers">
                <h1 className='title'>
                    عروض الجمعية
                </h1>
                <div className='tabs mt-5'>
                    {tabs?.map(tab=>{
                        return <span 
                            key={tab?.value}
                            onClick={()=> {
                                setSelectedTab(tab)
                                setShouldUpdate(prev=> !prev)
                            }}
                            className={selectedTab?.value === tab?.value ? 'actice tab' : 'tab'}
                        >
                            {tab?.label}
                        </span>
                    })}
                </div>
                <Row className="mt-5">
                    {hasData === 1 && data?.map((prod, index) => (
                        <Col md={4} className='mb-3' key={index}>
                        <div className="new-card border-round p-3">
                            <div className='p-2'>
                                <div className="mb-3">
                                    <img src={prod.image} alt={prod.title} height='133' className="w-100 shadow-2" />
                                </div>
                                <div>
                                    <p className="card-title">{prod.title}</p>
                                    <div className="text-center">
                                        <Link
                                            to='/offers/offer'
                                            state={{pdf: prod.cover_image}}
                                            className="lab-btn btn btn-primary w-50 m-auto"
                                        >
                                            اظهار العرض
                                        </Link>
                                        <a href={prod.cover_image} target='_blank' className="phone-btn btn btn-primary w-50 m-auto">اظهار العرض</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Col>
                    ))}

                    {hasData === 0 && <h1 className="mt-5 text-center">لا توجد عروض</h1>}
                </Row>

                <Pagination
                  setData={setData}
                  service={offerService}
                  shouldUpdate={shouldUpdate}
                  setHasData={setHasData}
                  setLoading={setLoading}
                  type={selectedTab?.value}
                />
            </div>
            </div>
    </div>
}
export default Offers