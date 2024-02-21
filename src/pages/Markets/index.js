
import { Carousel } from 'primereact/carousel';
import { useEffect, useState } from 'react';
import header from '../../assets/header.jpeg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import './style.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Markets = () =>{
    const [data, setData] = useState([])
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
            
        ])
    },[])

    const productTemplate = (product) => {
        return (
            <div className='m-4'>
            <div className="market-card border-round p-3">
                <div className='p-2'>
                    <div className="mb-3">
                        <img src={product.img} alt={product.name} className="w-100 shadow-2" />
                    </div>
                    <div>
                        <p className="hours">
                        مواعيد العمل: {product.hours} ساعة عمل
                        </p>
                        <hr />
                        <p className="card-title">{product.title}</p>
                        <p className="card-location">
                            <img src={location} alt='location' />
                            {product.location}
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