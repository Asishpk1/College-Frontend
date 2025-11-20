import { Link } from 'react-router-dom'
import phone from '../assets/phone1.png'

const Contact = () => {
  return (
    <>
    <div className='px-md-5 px-3 mb-5 mb-md-0'>
        <h2 className='fw-bold text-center mt-sm-5 mt-4' style={{color:'rgba(162, 2, 34, 1)'}}>Contact Us</h2>
        <p className='text-secondary'>At Streamify, we believe communication should be as clear and effortless as the experience we’re building. Whether you have suggestions, want to report an issue, or simply wish to share your thoughts, we’re here to listen. Every message helps shape the platform, refine our features, and push us closer to delivering the most intuitive streaming companion possible.</p>
        <div className='d-flex justify-content-center mt-sm-5'>
            <img src={phone} alt="" className='contact-photo' style={{width:'50%'}} />
        </div>
        <div className='d-flex flex-wrap align-items-center justify-content-center mt-sm-5 mt-3 gap-4 pb-sm-5'>
            <input className='form-control contact-input'style={{width:'25%'}} type="text" placeholder='Enter your Email' />
            <Link to={'/contact'}><button className='btn'><i className="fa-solid fa-arrow-right"></i></button></Link>
        </div>
    </div>
    </>
  )
}

export default Contact