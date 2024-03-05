import { useState } from "react"
import { Col, Row } from "react-bootstrap";
import Pagination from "../../common/Pagination/Pagination";
import OfferService from "../../services/OfferService";
import Offer from "./Offer";
import './style.css'

const Offers = () =>{
    const [data, setData] = useState([])
    const [hasData, setHasData] = useState()
    const [image, setImage] = useState('')
    const [modal, setModal] = useState(false)
    const [shouldUpdate, setShouldUpdate] = useState(false)
    const [loading, setLoading] = useState(false)
    const offerService = new OfferService()

    return <div style={{marginTop:'68px'}}>
            <div className="container">
            <div className="offers">
                <h1 className='title'>
                    عروض الجمعية
                </h1>
                <Row className="mt-5">
                    {data?.map((prod, index) => (
                        <Col md={4} className='mb-3' key={index}>
                        <div className="new-card border-round p-3">
                            <div className='p-2'>
                                <div className="mb-3">
                                    <img src={prod.cover_image} alt={prod.title} height='133' className="w-100 shadow-2" />
                                </div>
                                <div>
                                    <p className="card-title">{prod.title}</p>
                                    <div className="text-center">
                                        <button
                                            onClick={()=> {
                                                setModal(true)
                                                setImage(prod?.image)
                                            }}
                                            className="btn btn-primary"
                                        >
                                            اظهار العرض
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Col>
                    ))}
                </Row>

                <Pagination
                  setData={setData}
                  service={offerService}
                  shouldUpdate={shouldUpdate}
                  setHasData={setHasData}
                  setLoading={setLoading}
                />
            </div>
            </div>
            {modal && (
                <Offer
                image={image}
                addModal={modal}
                setAddModal={() => setModal(false)}
                />
            )}
    </div>
}
export default Offers