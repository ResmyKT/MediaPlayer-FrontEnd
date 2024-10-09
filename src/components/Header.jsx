import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
NavbarBrand

const Header = () => {
  return (
    <div>
     <Navbar style={{zIndex:1}} className="bg-info position-fixed w-100">
        <Container>
          <Navbar.Brand>
       <Link style={{textDecoration:'none',fontWeight:'bolder',color:'white'}} to={'/'}>
       <i className='fa-solid fa-music me-2'></i>{' '}
          Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
