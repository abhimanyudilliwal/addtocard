import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <Container>
          <div className="footer-grid">
            <div className="footer-column">
              <h4>ONLINE SHOPPING</h4>
              <ul>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/kids">Kids</Link></li>
                <li><Link to="/home-living">Home & Living</Link></li>
                <li><Link to="/beauty">Beauty</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>CUSTOMER POLICIES</h4>
              <ul>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/tac">T&C</Link></li>
                <li><Link to="/track-order">Track Order</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
                <li><Link to="/cancellation">Cancellation</Link></li>
                <li><Link to="/returns">Returns</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
              <ul>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902461-googleplay.png" alt="Google Play" className="app-badge" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="https://constant.myntassets.com/web/assets/img/0699ec44-7ffa-403a-9ba5-e69b8d105321157460291025-appstore.png" alt="App Store" className="app-badge" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>100% ORIGINAL</h4>
              <p>We guarantee products are original</p>
              <h4 className="margin-top">FREE DELIVERY</h4>
              <p>Free delivery on orders above ₹799</p>
            </div>
          </div>
        </Container>
      </div>

  
    </footer>
  );
};

export default Footer;
