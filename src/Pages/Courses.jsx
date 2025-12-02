import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <>
    <div className=' container-fluid'>
        <h1 className='text-center mt-md-5 mt-4 headings' style={{color:'rgba(162, 2, 34, 1)'}}>Academics</h1>
        <div className='row p-5 mt-md-5 d-flex align-items-center justify-content-center' style={{backgroundColor:'whitesmoke'}}>
            <div className='col-md-4'>
                <h2 className='headings'>Undergraduate Programs</h2>
            </div>
            <div className='col-md-4'>
                <div className='d-flex flex-column gap-2'>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 w-100 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>American Literature <i className='fa-solid fa-arrow-right'></i></button></Link>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 w-100 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Creative Writing <i className='fa-solid fa-arrow-right'></i></button></Link>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 w-100 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Astrophysics <i className='fa-solid fa-arrow-right'></i></button></Link>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 w-100 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Biomedical Engineering <i className='fa-solid fa-arrow-right'></i></button></Link>
                </div>
            </div>
        </div>

        <div className='row p-5 mt-5 d-flex align-items-center justify-content-center' style={{backgroundColor:'rgba(162, 2, 34, 1)'}}>
            <div className='col-md-4'>
                <h2 className='text-light headings'>Graduate Programs</h2>
            </div>
            <div className='col-md-4'>
                <div className='d-flex flex-column gap-2'>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 text-light w-100 contents' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>American Literature <i className='fa-solid fa-arrow-right'></i></button></Link>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 text-light w-100 contents' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>Creative Writing <i className='fa-solid fa-arrow-right'></i></button></Link>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 text-light w-100 contents' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>Applied Health <i className='fa-solid fa-arrow-right'></i></button></Link>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 text-light w-100 contents' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>Minor in English <i className='fa-solid fa-arrow-right'></i></button></Link>
                </div>
            </div>
        </div>

        <div className='row p-5 mt-5 d-flex align-items-center justify-content-center' style={{backgroundColor:'whitesmoke'}}>
            <div className='col-md-4'>
                <h2 className='headings'>Lifelong Learning</h2>
            </div>
            <div className='col-md-4'>
                <div className='d-flex flex-column gap-2'>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 w-100 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Bachelor of Arts (B.A) <i className='fa-solid fa-arrow-right'></i></button></Link>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 w-100 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Master of Arts (M.A) <i className='fa-solid fa-arrow-right'></i></button></Link>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 w-100 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Doctor of Philosophy <i className='fa-solid fa-arrow-right'></i></button></Link>
                  <Link to={'/course-details'}><button className='btn rounded-0 p-2 fs-5 w-100 contents' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Health and Wellness <i className='fa-solid fa-arrow-right'></i></button></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Courses