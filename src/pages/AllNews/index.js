import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import header from '../../assets/header.jpeg';
import Pagination from "../../common/Pagination/Pagination";
import Contact from "../Contact";
import Talabat from "../Talabat";
import './style.css'

const AllNews = () =>{
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        setData([
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
            {img: header, title: 'تهنئة بتجديد الثقه لمعالي وزير الشؤن الاجتماعيه', description: ' طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي'},
        ])
    },[])

    return <div style={{marginTop:'68px'}}>
            <div className="container">
            <div className="all-news">
                <h1 className='title'>
                    أخبار الجمعية
                </h1>
                <Row>
                    {data?.map((prod, index) => (
                        <Col md={4} className='mb-3 cursor-pointer' key={index} onClick={()=> navigate('/news/new', {state: prod})}>
                        <div className='m-4'>
                        <div className="new-card border-round p-3">
                            <div className='p-2'>
                                <div className="mb-3">
                                    <img src={prod.img} alt={prod.name} height='133' className="w-100 shadow-2" />
                                </div>
                                <div>
                                    <p className="card-title">{prod.title}</p>
                                    <p className="card-description">{prod.description}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </Col>
                    ))}
                </Row>

                {/* <Pagination
                  setData={setData}
                  service={adminService}
                  shouldUpdate={shouldUpdate}
                  setHasData={setHasData}
                  setLoading={setLoading}
                /> */}
            </div>
                <Talabat />
                <Contact />
            </div>
    </div>
}
export default AllNews