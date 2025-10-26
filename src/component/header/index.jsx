import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import './header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.totalItems);

  return (
    <>
      <Navbar expand="lg" className="main-navbar" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            MYNTRA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto main-nav">
              <Nav.Link as={Link} to="/" className="nav-link">MEN</Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">WOMEN</Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">KIDS</Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">HOME & LIVING</Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">BEAUTY</Nav.Link>
            </Nav>
            <Nav className="navbar-right">
           
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search for products, brands and more" 
                  className="search-input"
                />
                <button className="search-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15 15L11.61 11.61M13.33 7.14a6.19 6.19 0 1 1-12.38 0 6.19 6.19 0 0 1 12.38 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
           
              
           
              <Nav.Link as={Link} to="/profile" className="icon-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>Profile</span>
              </Nav.Link>
              
          
              <Nav.Link as={Link} to="/card" className="icon-link cart-link">
                <div className="cart-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 22c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM20 22c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M1 1h4l2.68 13.39c.15.72.67 1.26 1.41 1.26h10.5c.74 0 1.36-.54 1.51-1.26L23 6H6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                  {cartItems > 0 && <span className="cart-badge" onClick={() => Navigate('/card')}>{cartItems}</span>}
                </div>
                <span>Card</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
