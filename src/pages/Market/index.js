import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import phone from '../../assets/phone.svg';
import loc from '../../assets/location.svg';
import map from '../../assets/map.svg';
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
                    {data?.address}
                </p>
                <p>
                    <a href={`tel:${data.phone}`} className='phone l-hover' style={{textDecoration: 'none'}}>
                                <img src={phone} alt='phone' width={40} />
                                {data.phone} 
                            </a>
                    {/* <img src={phone} alt='phone' />
                    {data?.phone} */}
                </p>
                <p onClick={e=> {
                    e.stopPropagation();
                    window.open(data.address_link, "_blank");
                }} className='location cursor-pointer l-hover'>
                    <img src={map} alt='phone' width={40} style={{borderRadius: '50%'}} />
                                اذهب إلي الموقع
                </p>
                <img src={data?.image} alt='market' className="img" width='100%' />
            </div>
        </div>
    </div>
}
export default Market;