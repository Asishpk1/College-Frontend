import homeImg from '../assets/home.jpg'
import sec1 from '../assets/sec0.jpg'
import sec2 from '../assets/sec1.jpg'
import camp1 from '../assets/camp1.jpg'
import camp2 from '../assets/camp2.jpg'
import camp3 from '../assets/camp3.jpg'
import quote from '../assets/quote.png'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addReviewAPI, getAllReviewsAPI } from '../Service/allAPI'
import { toast } from 'react-toastify'

const Home = () => {

  const [show, setShow] = useState(false);
  const [reviewDetails, setReviewDetails] = useState({ name: "", program: "", feedback: "" })
  const [allReviews,setAllReviews] = useState([])
  const [addResponse,setAddResponse] = useState({})

  const handleClose = () => {
    setReviewDetails({ name: "", program: "", feedback: "" })
    setShow(false);
  }
  const handleShow = () => setShow(true);

  

  const addReview = async () => {
    const { name, program, feedback } = reviewDetails

    if (name && program && feedback) {
      try {
        const result = await addReviewAPI(reviewDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Review Added")
          setReviewDetails({ name: "", program: "", feedback: "" })
          handleClose()
          setAddResponse(result)
        }
        if (result.status == 406) {
          toast.error(result.response.data)
          setReviewDetails({ name: '', program: '', feedback: '' })
        }

      }
      catch (err) {
        console.log(err);

      }
    }
    else {
      toast.error("Enter all fields")
    }
  }

  useEffect(() => {
    getAllReviews()
  }, [addResponse])
  

  const getAllReviews = async()=>{
    try{
      const result = await getAllReviewsAPI()
      console.log(result);
      if(result.status==200){
        setAllReviews(result.data)
      }
      
    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <>
      <div className='container-fluid'>

        {/* First Section */}
        <div className='row p-5 d-flex justify-content-between align-items-end' style={{ backgroundImage: `url(${homeImg})`, height: '640px', backgroundSize: 'cover', color: 'white', backgroundPosition: 'center' }}>
          <div className="col-md-6">
            <h5 className='mb-3'><i className="fa-solid fa-building-columns"></i> Knowledge meets innovation</h5>
            <h1 style={{ fontSize: '58px' }}>Unleashing Potential Fostering Excellence</h1>
            <Link to={'/courses'}><button className='btn text-light py-2 px-3 rounded-0' style={{ backgroundColor: 'rgba(162, 2, 34, 1)' }}>View Our Program <i className='fa-solid fa-arrow-right'></i></button></Link>
          </div>
          <div className="col-md-3">
            <h3>Undergraduate</h3>
            <Link to={'/courses'}><button className='btn p-0 text-light'><h5 className='fw-normal'>Browse the Undergraduate degrees</h5></button></Link>
            <hr />
            <h3>Graduate</h3>
            <Link to={'/courses'}><button className='btn p-0 text-light'><h5 className='fw-normal'>Browse the Graduate degrees</h5></button></Link>
            <hr />
          </div>

        </div> <br />

        {/* Second Section */}
        <div className='row d-flex justify-content-center align-items-center mt-5 pt-sm-5'>
          <div className="col-md-5 d-flex gap-4">
            <img src={sec1} alt="" style={{ width: '45%' }} />
            <img src={sec2} alt="" style={{ width: '45%' }} />
          </div>
          <div className="col-md-5">
            <h5 className='mb-3' style={{ color: 'rgba(162, 2, 34, 1)' }}><i className="fa-solid fa-building-columns"></i> Knowledge meets innovation</h5>
            <h1>About University</h1>
            <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tenetur. Fugit atque vitae cupiditate ipsa eos a ipsam quia, minus amet voluptates voluptatum earum officia asperiores optio, consequuntur cum sit!</p>
            <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tenetur. Fugit atque vitae cupiditate ipsa eos a ipsam quia, minus amet voluptates voluptatum earum officia asperiores optio, consequuntur cum sit!</p>
            <div className='d-flex gap-5'>
              <Link to={'/about'}>
                <button className='btn rounded-0 p-3' style={{ border: 'solid 2px rgba(162, 2, 34, 1)', color: 'rgba(162, 2, 34, 1)' }}> <i class="fa-solid fa-people-roof"></i> University Mission Statement</button></Link>
              <Link to={'/about'}><button className='btn rounded-0 p-3' style={{ border: 'solid 2px rgba(162, 2, 34, 1)', color: 'rgba(162, 2, 34, 1)' }}> <i class="fa-solid fa-school"></i> University Vision Achievement</button></Link>
            </div>
            ,<Link to={'/courses'}><button className='btn text-light py-2 px-3 rounded-0 mt-4' style={{ backgroundColor: 'rgba(162, 2, 34, 1)' }}>View Our Program <i className='fa-solid fa-arrow-right'></i></button></Link>
          </div>
        </div>

        {/* Third Section */}
        <div className='d-flex justify-content-center mt-5 pt-sm-5'>
          <div className='w-75 d-flex justify-content-around p-4 ' style={{ backgroundColor: 'rgba(162, 2, 34, 1)' }}>
            <div className='text-light'>
              <h1>90%</h1>
              <h6>Post-Graduation Success <br /> Rate</h6>
            </div>
            <div style={{ width: '1px', height: '100px', backgroundColor: 'rgb(255, 255, 255,0.2)' }}></div>
            <div className='text-light'>
              <h1>Top 10</h1>
              <h6>Colleges That Create <br /> Futures</h6>
            </div>
            <div style={{ width: '1px', height: '100px', backgroundColor: 'rgb(255, 255, 255,0.2)' }}></div>
            <div className='text-light'>
              <h1>No.1</h1>
              <h6>In The Nation For <br /> Materials R&D</h6>
            </div>
          </div>
        </div>

        {/* Academics Section */}
        <div>
          <h1 className='text-center mt-5 pt-sm-5 mb-4'>Academics & Programs</h1>
          <div className='d-flex justify-content-center'>
            <div className='row ' style={{ backgroundColor: 'whitesmoke', width: '85%' }}>
              <div className="col-md-4 py-5 px-5">
                <h2>Undergraduate</h2>
                <div className='d-flex flex-column gap-2'>
                  <button className='btn rounded-0 p-2 fs-5' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>American Literature</button>
                  <button className='btn rounded-0 p-2 fs-5' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Creative Writing</button>
                  <button className='btn rounded-0 p-2 fs-5' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Astrophysics</button>
                  <button className='btn rounded-0 fs-5' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Bio Engineering</button>
                </div>
              </div>
              <div className="col-md-4 py-5 px-5" style={{ backgroundColor: 'rgba(162, 2, 34, 1)' }}>
                <h2 className='text-center text-light'>Graduate</h2>
                <div className='d-flex flex-column gap-2'>
                  <button className='btn rounded-0 p-2 fs-5 text-light' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>American Literature</button>
                  <button className='btn rounded-0 p-2 fs-5 text-light' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>Creative Writing</button>
                  <button className='btn rounded-0 p-2 fs-5 text-light' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>Applied Health</button>
                  <button className='btn rounded-0 p-2 fs-5 text-light' style={{ border: 'solid 2px rgba(237, 227, 227, 0.3)', fontWeight: '500' }}>Minor in English</button>
                </div>
              </div>
              <div className="col-md-4 py-5 px-5">
                <h2 className='text-center'>Lifelong Learning</h2>
                <div className='d-flex flex-column gap-2'>
                  <button className='btn rounded-0 p-2 fs-5' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Bachelor of Arts (B.A)</button>
                  <button className='btn rounded-0 p-2 fs-5' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Master of Arts (M.A)</button>
                  <button className='btn rounded-0 p-2 fs-5' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Doctor of Philosophy</button>
                  <button className='btn rounded-0 p-2 fs-5' style={{ border: 'solid 2px rgba(171, 161, 161, 0.5)', fontWeight: '500' }}>Health and Wellness</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Life Section */}
        <div className='py-sm-5'>
          <div className='p-5 text-center row d-flex align-items-center justify-content-center mt-5' style={{ backgroundColor: 'rgba(162, 2, 34, 1)' }}>
            <h1 className='col-md-2 text-light' style={{ fontSize: '50px' }}>Campus Life</h1>
            <h6 className='col-md-2' style={{ color: 'rgb(255,255,255,0.7)' }}>Building a vibrant community of creative and accomplished people from around the world</h6>
            <div className="col-md-2">
              <img src={camp3} alt="" className='w-100' />
            </div>
            <div className="col-md-2">
              <img src={camp2} alt="" className='w-100' />
            </div>
            <div className="col-md-2">
              <img src={camp1} alt="" className='w-100' />
            </div>

          </div>
        </div>

        {/* Reviews Section */}
        <div className='mt-5 p-5' style={{ backgroundColor: 'whitesmoke' }}>
          <h1 className='text-center'>Students Feedback</h1>
          <p className='text-secondary text-center m-0'>Discover How UNIPIX Has Shaped, Inspired, and Empowered the Journeys of Learners From Every Background</p>
          <div className='mt-5 d-flex flex-wrap gap-3 justify-content-around align-items-center'>
            {allReviews.length>0?
            allReviews.map((review,index)=>(
              <Card key={index} className='border-0 shadow' style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title style={{ color: 'rgba(162, 2, 34, 1)' }}>★ ★ ★ ★ ★</Card.Title>
                <Card.Text>
                  {review.feedback}
                </Card.Text>
                <div className=' row d-flex justify-content-between align-items-center'>
                  <div className='col-8'>
                    <span>{review.name}</span> <br />
                    <span>{review.program}</span>
                  </div>
                  <div className='col-4'>
                    <img src={quote} alt="" className='w-100' />
                  </div>
                </div>
              </Card.Body>
            </Card>
            ))
            :
            <h1 className='text-secondary'>No Feedbacks found</h1> }
          </div>

          <div className=' d-flex justify-content-center'>
            <button onClick={handleShow} className='btn mt-5 text-light px-4 rounded-0' style={{ backgroundColor: 'rgba(162, 2, 34, 1)' }}>Add Feedback</button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Feedback</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input value={reviewDetails.name} onChange={(e) => setReviewDetails({ ...reviewDetails, name: e.target.value })} type="text" className='form-control mb-3' placeholder='Name' />
                <input value={reviewDetails.program} onChange={(e) => setReviewDetails({ ...reviewDetails, program: e.target.value })} type="text" className='form-control mb-3' placeholder='Program' />
                <input value={reviewDetails.feedback} onChange={(e) => setReviewDetails({ ...reviewDetails, feedback: e.target.value })} type="text" className='form-control mb-3' placeholder='Feedback' />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button className='border-0 px-5' onClick={addReview} style={{ backgroundColor: 'rgba(162, 2, 34, 1)' }}>Add Feedback</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home