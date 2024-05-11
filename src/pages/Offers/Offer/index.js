import { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Offer = () => {
  const [pdf, setPdf] = useState('')
  const location = useLocation()

  useEffect(()=>{
    setPdf(location?.state?.pdf)
  },[])

  return (
    <div className="container" style={{marginTop: '8rem'}}>
          <Row>
            <Col md={12} className='text-center'>
                {/* <img src={image} alt='image' className='w-100' />  */}
                <object
                type="application/pdf"
                data={pdf}
                width='80%'
                height='1000px'
                />
            </Col>
          </Row>
          </div>
  );
};

export default Offer;
