import React from 'react';
import './Footer.scss';

function Footer() {
    const date = new Date();
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-company-text">
            <h1 className="footer-company-text-head">VOITURE</h1>
            <p className="footer-company-text-para">
              Voiture is a car renting and selling company with outlets in 69
              countries World Wide. Our cars are top-notch and our service is
              second to none.
            </p>
          </div>
          <div className="footer-company-text-items">
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
          </div>
          <div className="footer-company-text-items">
            <p>FAQ</p>
            <p>Contact Us</p>
            <p>Support</p>
          </div>
          <div className="footer-company-text-items">
            <p>Careers</p>
            <p>International Affairs</p>
            <p>Culture</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            Copyright &copy; {date.getFullYear()} <span>DTGLOVER</span>{" "}
          </p>
        </div>
      </footer>
    );
}

export default Footer
