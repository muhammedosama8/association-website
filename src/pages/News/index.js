
import { Carousel } from 'primereact/carousel';
import { useEffect, useState } from 'react';
import header from '../../assets/header.jpeg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import './style.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const News = () =>{
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
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
        ])
    },[])

    const productTemplate = (product) => {
        return (
            <div className='m-4'>
            <div className="new-card border-round p-3">
                <div className='p-2'>
                    <div className="mb-3">
                        <img src={product.img} alt={product?.title || 'news'} height='133' className="w-100 shadow-2" />
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
        <Carousel 
            style={{marginTop: '38px' ,direction: 'ltr'}} 
            value={data} 
            numVisible={3} 
            numScroll={3} 
            responsiveOptions={responsiveOptions} 
            itemTemplate={productTemplate}
        />
        <div className='more text-center'>
            <Link to='/news'>المزيد</Link>
        </div>
    </div>
    </div>
}
export default News;