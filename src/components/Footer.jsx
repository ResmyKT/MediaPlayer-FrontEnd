import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
   <MDBFooter bgColor='' className='text-center text-lg-start text-muted'>
    

      <section className='border-top'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="music" className="me-3" />
                Media Player
              </h6>
              <p className='my-2'>
                Designed and built with all the love in the world by the Luminar team with the help of our contributors.

              </p>
              <p className='my-3'>Code licenced Luminar,docs CC BY 3.0</p>
              <p>Currently v5.3.2.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  Landing Page
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  Home Page
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                 Watch History Page
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
                <a href='#!' className='text-reset'  style={{textDecoration:'none'}}>
                React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'  style={{textDecoration:'none'}}>
                 React Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'  style={{textDecoration:'none'}}>
                React Router
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p className='d-flex'>
              <MDBInput style={{marginRight:'10px', width:'210px'}} label="" id="typeText" type="text" placeholder='Enter your email here' />
              <MDBBtn style={{width:'60px',height:'35px'}} className='fw-bolder'>→</MDBBtn>
              </p>
             
              <p>
              <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Copyright © June 2024 Batch, Media player, Built with React.
        
         
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
