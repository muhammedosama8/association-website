
import { Carousel } from 'primereact/carousel';
import { useEffect, useState } from 'react';
import header from '../../assets/user.jpeg';
import './style.css'
import { Button, Col, Row } from 'react-bootstrap';
import BoardOfDirectorsService from '../../services/BoardOfDirectorsService';

const Management = () =>{
    const [data, setData] = useState([])
    const boardOfDirectorsService = new BoardOfDirectorsService()
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const limit = 9

    useEffect(()=>{
        let obj ={
            offset: 0,
            limit
        }
        boardOfDirectorsService.getList(obj).then(res=>{
            if(res?.status === 200){
                setData(res?.data?.data?.data)
            }
        }).catch(e=> console.log(e))
    },[])

    const productTemplate = (product) => {
        return (
            <div className='m-4'>
            <div className="management-card border-round p-3">
                    <div className="mb-3">
                        <img src={product.image} alt='img' width='374' className="shadow-2" />
                    </div>
                    <div className='text-center text-white'>
                        <p className="card-name">{product.name}</p>
                        <p className="card-jop">{product.job_title}</p>
                    </div>
            </div>
            </div>
        );
    };

    return <div id="management" className="management">
    <div className='container'>
        <h1 className='title'>
        مجلس الإدارة
        </h1>
        {data?.length > 1 && <Carousel 
            style={{marginTop: '38px' ,direction: 'ltr'}} 
            value={data} 
            numVisible={3} 
            numScroll={3} 
            responsiveOptions={responsiveOptions} 
            itemTemplate={productTemplate}
        />}
        {(!!data?.length && data?.length == 1) && <Row>
            {data?.map((item, index)=>{
                return <Col md={4} key={index}>
                    <div className="management-card border-round p-3">
                        <div className="mb-3">
                            <img src={item.image} alt='img' width='374' className="shadow-2" />
                        </div>
                        <div className='text-center text-white'>
                            <p className="card-name">{item.name}</p>
                            <p className="card-jop">{item.job_title}</p>
                        </div>
                    </div>
                </Col>
            })}
        </Row>}
    </div>
    </div>
}
export default Management;