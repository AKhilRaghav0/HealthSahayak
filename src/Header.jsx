import React, { useState, useEffect } from 'react';
import './Header.css'
// import About from './About';
// import SignIn from './SignIn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header className={`fixed-top ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="Untitled design.png"
              alt="HealthSahayak"
              className="logo-img me-2"
            />
            <span className="brand-text">HealthSahayak</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Items */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="HeroSection.jsx">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Features.jsx">HealthCare Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa-solid fa-droplet" style={{color: '#d51010'}}></i> Available Blood Bank</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="About.jsx">About Us</a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <a href="SignIn.jsx" className="btn btn-outline-primary">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    
{/* <About/>
<SignIn/> */}
    </>
  );
};


export default Header;