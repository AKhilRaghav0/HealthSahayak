import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-between mb-4">
          <div className="col-md-3">
            <div className="d-flex align-items-center mb-3">
              <img
                src="Untitled design.png"
                alt="HealthSahayak"
                className="logo-img me-2"
              />
              <p className="mb-0 fs-5">HealthSahayak</p>
            </div>
            <address className="address">
              <p>healthsahayak123@gmail.com</p>
              <p>Panipat, Haryana</p>
            </address>
          </div>
          <div className="col-md-2">
            <h3 className="text-white">About Us</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none" aria-label="Blog">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none" aria-label="Facility">Facility</a></li>
              <li><a href="#" className="text-white text-decoration-none" aria-label="Returns">Returns</a></li>
              <li><a href="#" className="text-white text-decoration-none" aria-label="FAQs">FAQs</a></li>
              <li><a href="#" className="text-white text-decoration-none" aria-label="Privacy Policy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3 className="text-white">Services</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none" aria-label="Doctor Consultation">Doctor Consultation</a></li>
              <li><a href="#" className="text-white text-decoration-none" aria-label="Health Program">Health Program</a></li>
              <li><a href="#" className="text-white text-decoration-none" aria-label="Reversal Program">Reversal Program</a></li>
              <li><a href="#" className="text-white text-decoration-none" aria-label="More Services">More +</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="text-white">Subscribe</h4>
            <h4><a href="#" className="text-white text-decoration-none" aria-label="Subscribe for more updates">for more updates</a></h4>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control subscribe-input"
              required
            />
          </div>
        </div>
        <div className="text-center quote">
          <span>
            "Every life matters, Every moment counts."
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
