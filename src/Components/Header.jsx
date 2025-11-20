import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar expand='lg' className='p-4 shadow' style={{backgroundColor:'white'}}>
      <Container>
        <Link to={'/'}  className='text-decoration-none'><Navbar.Brand style={{color:'rgba(162, 2, 34, 1)'}} className='fs-4 fw-bold'> <i className="fa-solid fa-building-columns"></i> UNIPIX <span className='fw-normal fs-5'>UNIVERSITY</span></Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className=' d-flex justify-content-center gap-sm-5 gap-2 flex-wrap' style={{fontWeight:'500'}}>
            <Link to={'/'} className=' text-decoration-none text-dark highlight'>Home</Link>
            <Link to={'/courses'} className=' text-decoration-none text-dark highlight'>Academics</Link>
            <Link to={'/about'} className=' text-decoration-none text-dark highlight'>About</Link>
            <Link to={'/contact'} className=' text-decoration-none text-dark highlight'>Contact</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header