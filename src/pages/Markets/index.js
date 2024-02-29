
import { Carousel } from 'primereact/carousel';
import { useEffect, useState } from 'react';
import header from '../../assets/header.jpeg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import './style.css'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import BranchesAndMarketsService from '../../services/BranchesAndMarketsService';

const Markets = () =>{
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const branchesAndMarketsService = new BranchesAndMarketsService()
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
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
        branchesAndMarketsService.getList(obj).then(res=>{
            if(res?.status === 200){
                setData(res?.data?.data?.data)
            }
        }).catch(e=> console.log(e))
    },[])

    const productTemplate = (product) => {
        return (
            <div className='m-4 cursor-pointer' onClick={()=> navigate('/markets/market', {state: product})}>
            <div className="market-card border-round p-3">
                <div className='p-2'>
                    <div className="mb-3">
                        <img 
                            src={product.image} 
                            alt={product?.title || 'market'} 
                            className="shadow-2" //w-100 
                            width='314'
                        />
                    </div>
                    <div>
                        <p className="hours">
                        مواعيد العمل: {product.hours} ساعة عمل
                        </p>
                        <hr />
                        <p className="card-title">{product.title}</p>
                        <p className="card-location">
                            <img src={location} alt='location' />
                            {product.address}
                        </p>
                        <p className="card-phone">
                            <img src={phone} alt='phone' />
                            {product.phone}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        );
    };

    return <div id="markets" className="markets">
    <div className='container'>
        <h1 className='title'>
        الفروع والأسواق 
        </h1>
        <Carousel 
            style={{marginTop: '38px' ,direction: 'ltr'}} 
            value={data} 
            numVisible={3} 
            numScroll={3} 
            responsiveOptions={responsiveOptions} 
            itemTemplate={productTemplate}
        />
        <div className='more text-center'>
            <Link to='/markets'>المزيد</Link>
        </div>
    </div>
    </div>
}
export default Markets;