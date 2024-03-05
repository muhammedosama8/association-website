import { useEffect, useState } from "react";
import StaticPagesServices from "../../services/StaticPagesService";
import './style.css'

const Privacy = () =>{
    const [data, setData] = useState()
    const staticPagesServices = new StaticPagesServices()

    useEffect(()=>{
        let params = {type: 'Privacy'}
        staticPagesServices.getList(params).then(res=>{
            if(res?.status === 200){
                setData(res.data.data)
            }
        })
    },[])

    return <div style={{minHeight: '60vh'}}>
        <div className="container">
            <div className="privacy">
                <h1 className='title mb-4'>
                    سياسة الخصوصية 
                </h1>
                {data?.map((res, index)=>{
                    return <div key={index} className='mb-4'>
                        <h4>{res.title_ar}</h4>
                        <div dangerouslySetInnerHTML={{ __html: res?.description_ar }}></div>
                    </div>
                })}
            </div>
        </div>
    </div>
}
export default Privacy;