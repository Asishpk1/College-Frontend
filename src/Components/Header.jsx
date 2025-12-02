import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Navbar expand='lg' className='p-md-4 p-3 shadow' style={{backgroundColor:'white'}}>
      <Container>
        <Link to={'/'}  className='text-decoration-none'><Navbar.Brand style={{color:'rgba(162, 2, 34, 1)'}} className='fs-4 fw-bold headings'> <i className="fa-solid fa-building-columns"></i> UNIPIX <span className='fw-normal fs-5 contents'>UNIVERSITY</span></Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className=' d-flex justify-content-center gap-sm-5 gap-2 flex-wrap' style={{fontWeight:'500'}}>
            <Link to={'/'} className=' text-decoration-none text-dark highlight contents'>Home</Link>
            <Link to={'/courses'} className=' text-decoration-none text-dark highlight contents'>Academics</Link>
            <Link to={'/about'} className=' text-decoration-none text-dark highlight contents'>About</Link>
            <Link to={'/contact'} className=' text-decoration-none text-dark highlight contents'>Contact</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header