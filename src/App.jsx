import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
// import Features from './Features';
import SignIn from './SignIn';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/Home" element={<HeroSection />} />
        {/* <Route path="/HealthCare Services" element={<Features />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
