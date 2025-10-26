import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import './header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.totalItems);

  return (
    <>
      <div className="top-bar">
        <Container>
          <div className="top-bar-content">
            <span>Free shipping on orders above ₹799</span>
            {/* <span>Customer Support: 1800-208-9898</span> */}
          </div>
        </Container>
      </div>

      <Navbar expand="lg" className="main-navbar" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-logo">
            MYNTRA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto main-nav">
              <Nav.Link as={Link} to="/men" className="nav-link">MEN</Nav.Link>
              <Nav.Link as={Link} to="/women" className="nav-link">WOMEN</Nav.Link>
              <Nav.Link as={Link} to="/kids" className="nav-link">KIDS</Nav.Link>
              <Nav.Link as={Link} to="/home-living" className="nav-link">HOME & LIVING</Nav.Link>
              <Nav.Link as={Link} to="/beauty" className="nav-link">BEAUTY</Nav.Link>
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
              
           
              <Nav.Link as={Link} to="/wishlist" className="icon-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>Wishlist</span>
              </Nav.Link>
              
           
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
                  {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
                </div>
                <span>Bag</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
