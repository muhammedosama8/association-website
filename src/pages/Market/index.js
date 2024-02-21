import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../Contact";
import Talabat from "../Talabat";
import phone from '../../assets/phone.svg';
import loc from '../../assets/location.svg';
import './style.css'

const Market = () => {
    const [data, setData] = useState({})
    const location = useLocation()

    useEffect(()=>{
        setData(location?.state)
    },[])
 
    return <div>
        <div className="market">
            <div className="container">
                <h1 className="market-title">{data?.title}</h1>
                <p className="location">
                    <img src={loc} alt='location' />
                    {data?.location}
                </p>
                <p className="phone">
                    <img src={phone} alt='phone' />
                    {data?.phone}
                </p>
                <img src={data?.img} alt='market' className="img" width='100%' />
            </div>
        </div>

        <Talabat />
        <Contact />
    </div>
}
export default Market;