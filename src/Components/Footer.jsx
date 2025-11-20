import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
     <>
    <div className='mt-sm-5 container-fluid footer' style={{backgroundColor:'rgba(36, 34, 34, 1)'}}>
        <div className='d-flex justify-content-around pt-4 row w-100 m-0 sec-section'>

        {/* Unipix Section   */}
        <div className='col-md-5 px-3 px-sm-0'>
           <Link className='text-decoration-none text-light' to={'/'}>
            <i style={{fontSize:'30px', fontWeight:'600'}} className="fa-solid fa-building-columns"></i>
            <span className='ms-3' style={{fontSize:'30px', fontWeight:'600'}}>UNIPIX <span style={{fontSize:'20px'}}>UNIVERSITY</span></span>
           </Link> <br /> <br />
            <p className='text-secondary m-0' style={{textAlign:'justify'}}>Our university is dedicated to fostering academic excellence, innovative research, and a learning environment that empowers every student to reach their highest potential.</p>
            <p className='text-secondary' style={{textAlign:'justify'}}>We strive to cultivate a vibrant community where knowledge, integrity, and creativity come together to prepare learners for meaningful careers and impactful contributions to society.</p>
        </div>

        {/* Links Section */}
        <div className='col-md-1 mt-3 px-3 px-sm-0 text-light'>
            <h5 className='fw-bold'>Links</h5>
            <Link className='text-secondary' style={{textDecoration:'none'}} to={'/'}>Home</Link> <br />
            <Link className='text-secondary' style={{textDecoration:'none'}} to={'/courses'}>Academics</Link> <br />
            <Link className='text-secondary' style={{textDecoration:'none'}} to={'/about'}>About Us</Link>
        </div>

        {/* Know More Section */}
        <div className='col-md-1 mt-3 px-3 px-sm-0'>
            <h5 className='fw-bold text-light'>Know More</h5>
            <Link className='text-secondary' style={{textDecoration:'none'}} to={'/'}>Privacy Policy</Link> <br />
            <Link className='text-secondary' style={{textDecoration:'none'}} to={'/contact'}>Contact Us</Link>
        </div>
    </div>
    
    <p className='text-center w-100 p-0 m-0 text-secondary mt-2'>Copyright &copy; 2025 <strong>Raynott</strong> | Designed by <strong>Asish</strong></p>
    </div>
    </>
  )
}

export default Footer