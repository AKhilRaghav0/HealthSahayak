import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';

const HeroSection = () => {
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    if (location.trim()) {
      try {
        console.log('Searching hospitals in:', location);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
        alert('Failed to fetch hospitals. Please try again later.');
      }
    } else {
      alert('Please enter a location.');
    }
  };

  const handleEmergency = async () => {
    if (location.trim()) {
      try {
        console.log('Emergency services for:', location);
      } catch (error) {
        console.error('Error fetching emergency services:', error);
        alert('Failed to fetch emergency services. Please try again later.');
      }
    } else {
      alert('Please enter a location.');
    }
  };

  return (
    <div className="hero-section">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source src="public/vecteezy_animation-of-doctor-checking-patient-s-health-condition_46664534.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay" />

      {/* Content */}
      <section className="hero text-white py-5">
        <div className="container text-center py-5 my-5">
          <h1 className="display-4 mb-3 fw-bold">
            Find Available HealthCare Facilities in Real-Time
          </h1>
          <p className="lead mb-4 fw-semibold">
            Quickly locate and secure hospital beds during emergencies or planned visits.
          </p>
          <div className="input-group mb-4 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              list="locationOptions"
            />
            <datalist id="locationOptions">
              <option value="Delhi" />
              <option value="Haryana" />
              <option value="Punjab" />
              <option value="Mumbai" />
              <option value="Kerala" />
            </datalist>
            <button
              className="btn btn-success"
              type="button"
              onClick={handleSearch}
            >
              Find Hospitals
            </button>
          </div>
          <button
            className="btn btn-danger btn-lg"
            onClick={handleEmergency}
          >
            Emergency
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
