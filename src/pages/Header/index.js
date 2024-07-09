import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import header from '../../assets/header.jpeg';
import BannerService from '../../services/BannerService';
import './style.css'

function Header() {
    const [data, setData] = useState([])
    const bannerService = new BannerService()

    useEffect(()=>{
      bannerService?.getList().then(res=>{
        if(res?.status === 200){
          setData(res?.data?.data)
        }
      })
    },[])

  return (
    <Carousel data-bs-theme="dark" controls='false' id='home'>
        {data?.map((item, index)=>{
            return <Carousel.Item key={index}>
            <a href={item?.url_link} target='_blank'>
              <img
                className="d-block w-100"
                src={item?.image}
                alt="First slide"
              />
            </a>
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