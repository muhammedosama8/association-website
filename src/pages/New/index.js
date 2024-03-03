import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './style.css'

const New = () => {
    const [data, setData] = useState({})
    const location = useLocation()

    useEffect(()=>{
        setData(location?.state)
    },[])
 
    return <div>
        <div className="new">
            <div className="container">
                <h1 className="new-title">{data?.title}</h1>
                {/* <p className="writeBy">كتب بواسطة: <span className="owner">اسم الشخص</span></p> */}
                <p className="description">{data?.description}</p>
                <img src={data?.image} alt='new' className="img" width='100%' />
            </div>
        </div>
    </div>
}
export default New;