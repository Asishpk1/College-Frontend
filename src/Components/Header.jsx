import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='d-flex align-items-center justify-content-between p-4 px-5 shadow' style={{backgroundColor:'white'}}>
        <h3 className='fw-bold' style={{color:'rgba(162, 2, 34, 1)'}}><i className="fa-solid fa-building-columns"></i> UNIPIX <span className='fw-normal fs-5'>UNIVERSITY</span></h3>
        <div className='d-flex gap-5'>
            <Link to={'/'} className='text-decoration-none text-dark' style={{fontWeight:'500'}}>Home</Link>
            <Link to={'/courses'} className='text-decoration-none text-dark' style={{fontWeight:'500'}}>Academics</Link>
        </div>
        <div className='d-flex gap-5'>
            <Link to={'/about'} className='text-decoration-none text-dark' style={{fontWeight:'500'}}>About</Link>
            <Link to={'/contact'} className='text-decoration-none text-dark' style={{fontWeight:'500'}}>Contact</Link>
        </div>
    </div>
  )
}

export default Header