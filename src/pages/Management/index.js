
import { Carousel } from 'primereact/carousel';
import { useEffect, useState } from 'react';
import header from '../../assets/user.jpeg';
import './style.css'
import { Button } from 'react-bootstrap';

const Management = () =>{
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
            {img: header, name: 'سلطان الأحمدي', jop: 'رئيس مجل الادارة'},
            {img: header, name: 'سلطان الأحمدي', jop: 'رئيس مجل الادارة'},
            {img: header, name: 'سلطان الأحمدي', jop: 'رئيس مجل الادارة'},
            {img: header, name: 'سلطان الأحمدي', jop: 'رئيس مجل الادارة'},
            {img: header, name: 'سلطان الأحمدي', jop: 'رئيس مجل الادارة'},
            {img: header, name: 'سلطان الأحمدي', jop: 'رئيس مجل الادارة'},
        ])
    },[])

    const productTemplate = (product) => {
        return (
            <div className='m-4'>
            <div className="management-card border-round p-3">
                    <div className="mb-3">
                        <img src={product.img} alt='img' height='374' className="w-100 shadow-2" />
                    </div>
                    <div className='text-center text-white'>
                        <p className="card-name">{product.name}</p>
                        <p className="card-jop">{product.jop}</p>
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
        <Carousel 
            style={{marginTop: '38px' ,direction: 'ltr'}} 
            value={data} 
            numVisible={3} 
            numScroll={3} 
            responsiveOptions={responsiveOptions} 
            itemTemplate={productTemplate}
        />
    </div>
    </div>
}
export default Management;