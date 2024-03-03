
import { Carousel } from 'primereact/carousel';
import { useEffect, useState } from 'react';
import header from '../../assets/header.jpeg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import './style.css'
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import NewsService from '../../services/NewsService';

const News = () =>{
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const newsService = new NewsService()
    const limit = 9
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

    useEffect(()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    },[])

    useEffect(()=>{
        let obj ={
            offset: 0,
            limit
        }
        newsService.getList(obj).then(res=>{
            if(res?.status === 200){
                setData(res?.data?.data?.data)
            }
        }).catch(e=> console.log(e))
    },[])

    const productTemplate = (product) => {
        return (
            <div className='m-4 cursor-pointer' onClick={()=> navigate('/news/new', {state: product})}>
            <div className="new-card border-round p-3">
                <div className='p-2'>
                    <div className="mb-3">
                        <img src={product.image} alt={product?.title || 'news'} height='133' className="w-100 shadow-2" />
                    </div>
                    <div>
                        <p className="card-title">{product.title}</p>
                        <p className="card-description">{product.description}</p>
                    </div>
                </div>
            </div>
            </div>
        );
    };

    return <div id="news" className="news">
    <div className='container'>
        <h1 className='title'>
        أخبار الجمعية
        </h1>
        {data?.length > 3 && <Carousel 
            style={{marginTop: '38px' ,direction: 'ltr'}} 
            value={data} 
            numVisible={3} 
            numScroll={3} 
            responsiveOptions={responsiveOptions} 
            itemTemplate={productTemplate}
        />}
        {(!!data?.length && data?.length <= 3) && <Row>
            {data?.map((item, index)=>{
                return <Col md={4} key={index}>
                    <div className='cursor-pointer' onClick={()=> navigate('/news/new', {state: item})}>
                    <div className="new-card border-round p-3">
                        <div className='p-2'>
                            <div className="mb-3">
                                <img src={item.image} alt={item?.title || 'news'} height='133' className="w-100 shadow-2" />
                            </div>
                            <div>
                                <p className="card-title">{item.title}</p>
                                <p className="card-description">{item.description}</p>
                            </div>
                        </div>
                    </div>
            </div>
                </Col>
            })}
        </Row>}
        <div className='more text-center mt-5'>
            <Link to='/news'>المزيد</Link>
        </div>
    </div>
    </div>
}
export default News;