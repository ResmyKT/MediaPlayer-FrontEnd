import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.gif'
import { Card } from 'react-bootstrap'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpg'



const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* Landing head*/}
<div className='row align-items-center'>
    <div className='col-lg-5'>
        <h3>Welcome to< span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reprehenderit odio suscipit. Nesciunt quam sapiente earum. Dicta tenetur fugiat esse quibusdam. Non ullam consequuntur doloremque neque magni cumque quas voluptate?</p>
       <Link to={'/home'} className='btn btn-info mt-5'>Get Started</Link>
    </div>
    <div className='col'></div>
    <div className='col-lg-6'>
        <img className='img-fluid ms-5' src={landingImg} alt="" />
    </div>
</div>

      {/*features */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
         Users can upload , view and remove the videos.
        </Card.Text>
       
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
         Users can categorize the videos by drag and drop feature.
        </Card.Text>
       
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
         Users can manage the watch history of all videos.
        </Card.Text>
       
      </Card.Body>
    </Card>
            </div>
        </div>
    </div>

      {/*youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
            <h3 className='text-warning'>Simple, Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ullam molestias quam animi, optio dolores reiciendis placeat eaque dolorum vitae est repellendus, pariatur numquam eius ea veritatis dicta tenetur quibusdam.</p>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Categorise Videos:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ullam molestias quam animi, optio dolores reiciendis placeat eaque dolorum vitae est repellendus, pariatur numquam eius ea veritatis dicta tenetur quibusdam.</p>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ullam molestias quam animi, optio dolores reiciendis placeat eaque dolorum vitae est repellendus, pariatur numquam eius ea veritatis dicta tenetur quibusdam.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/B2UBMTA57JI?si=BxacnULtdZPU8MFM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing
