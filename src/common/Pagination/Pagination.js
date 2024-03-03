import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import './style.css'

const Pagination = ({setData, service,shouldUpdate, setHasData,setLoading, type, search,id})=>{
    const [totalPages, setTotalPages] = useState()
    const [page, setPage] = useState(1)
    const [pageShow, setPageShow] = useState(1)

    useEffect(()=> {
        setLoading(true)
        let params = {
            offset: (page-1)*10,
            limit: 10,
        }
        if(!!type) params['type'] = type
        if(!!search) params['search'] = search

        if(id){
            service?.getList(id, {...params}).then(res=>{
                if(res?.status === 200){
                    setData([...res.data?.data?.data]) 
                    let total= Math.ceil(res.data?.data?.totalItems / 10)
                    setTotalPages(total)
                    if(res.data?.data?.totalItems > 0){
                        setHasData(1)
                    } else {
                        setHasData(0)
                    }
                }
                setLoading(false)
            })
        } else{
            service?.getList({...params}).then(res=>{
                if(res?.status === 200){
                    setData([...res.data?.data?.data]) 
                    let total= Math.ceil(res.data?.data?.totalItems / 10)
                    setTotalPages(total)
                    if(res.data?.data?.totalItems > 0){
                        setHasData(1)
                    } else {
                        setHasData(0)
                    }
                }
                setLoading(false)
            })
        }
        
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },[page, shouldUpdate, search])

    useEffect(()=>{
        setPage(1)
    },[shouldUpdate])

    if(totalPages > 1){
        return(
            <Row className="pagination mt-3 px-2">
                <Col md={12} className="d-flex justify-content-between align-items-center">
                    <span>page {' '}
                        <strong> {page} of {totalPages}</strong>
                    </span>
                    <span className="table-index">
                        go to page: {' '}
                            <input 
                                type="number" 
                                className="ml-2"
                                style={{
                                    borderRadius: '0.3rem',
                                    background: '#fff',
                                    border: '1px solid hsl(0, 0%, 80%)',
                                    color: 'initial',
                                    height: '39px',
                                    padding: '8px',
                                    width: '5rem'
                                }}
                                min={'1'}
                                max={totalPages}
                                defaultValue={pageShow} 
                                value={pageShow} 
                                onChange = {e => { 
                                    setPageShow(e.target.value)
                                    if(!!e.target.value && parseInt(e.target.value) > 0 && parseInt(e.target.value) <= totalPages){
                                        setPage(e.target.value)
                                    }
                                }} 
                            />
                    </span>
                </Col>

                <Col md={12} className="text-center">	
                    <div className="filter-pagination  mt-3">
                        <button className=" previous-button" onClick={() => {
                            setPage(1)
                            setPageShow(1)
                        }} disabled={parseInt(page) === 1 }>{'<<'}</button>
                                    
                        <button className="previous-button" onClick={() => {
                            setPage(prev=> parseInt(prev)-1)
                            setPageShow(page-1)
                        }} disabled={parseInt(page) === 1 }>
                           previous
                        </button>
                        <button className="next-button" onClick={() => {
                            setPage(prev=> parseInt(prev)+1)
                            setPageShow(page+1)
                        }} disabled={parseInt(page) === totalPages}>
                            next
                        </button>
                        <button className=" next-button" onClick={() => {
                            setPage(parseInt(totalPages))
                            setPageShow(parseInt(totalPages))
                        }} disabled={parseInt(page) === totalPages}>{'>>'}</button>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Pagination;