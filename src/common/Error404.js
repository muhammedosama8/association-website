import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div style={{marginTop: '7rem'}}>
      <div className='container'>
        <div className='form-input-content text-center'>
              <p style={{
                  fontSize: '180px',
                  margin: '0',
                  fontWeight: '700',
                  fontFamily: 'fantasy',
                }}>404</p>
              <h4>
              لم يتم العثور على الصفحة التي كنت تبحث عنها!
              </h4>
              <p>
              ربما تكون قد أخطأت في كتابة العنوان أو ربما تم نقل الصفحة.
              </p>
              <div>
                <Link className='btn btn-primary' to='/'>
                العودة إلى الصفحة الرئيسية
                </Link>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Error404
