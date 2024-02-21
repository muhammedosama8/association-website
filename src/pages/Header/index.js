import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import header from '../../assets/header.jpeg';
import './style.css'

function Header() {
    const [data, setData] = useState([])

    useEffect(()=>{
        setData([
            {img: header, title: 'جمعية صباح السالم التعاونية1', description: 'طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو ' },
            {img: header, title: '2جمعية صباح السالم التعاونية', description: 'طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو ' },
            {img: header, title: '3جمعية صباح السالم التعاونية', description: 'طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو ' },
            {img: header},
        ])
    },[])

  return (
    <Carousel data-bs-theme="dark" controls='false' id='home'>
        {data?.map((item,index)=>{
            return <Carousel.Item>
            <img
              className="d-block w-100"
              src={item?.img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>{item?.title || ''}</h1>
              <p>{item?.description || ''}</p>
              <Link to='/contact-us'>تواصل معنا</Link>
            </Carousel.Caption>
          </Carousel.Item>
        })}
    </Carousel>
  );
}

export default Header;