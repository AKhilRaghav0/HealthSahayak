import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    if (location.trim()) {
      try {
        // const hospitals = await fetchHospitals(location);
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
        // const emergencyServices = await fetchEmergencyServices(location);
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
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100vh' }}>
      {/* Video Background */}
      <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0
  }}
>
  <source src="public/vecteezy_animation-of-doctor-checking-patient-s-health-condition_46664534.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}
      />

      {/* Content */}
      <section className="hero text-white py-5" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container text-center py-5 my-5">
          <h1 className="display-4 mb-3 fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Find Available HealthCare Facilities in Real-Time
          </h1>
          <p className="lead mb-4 fw-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Quickly locate and secure hospital beds during emergencies or planned visits.
          </p>
          <div className="input-group mb-4 mx-auto" style={{ maxWidth: '600px', gap: '10px'}}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ borderRadius:'18px' }}
            />
            <button 
              className="btn btn-success" 
              type="button" 
              onClick={handleSearch}
              style={{ borderRadius:'18px' }}
            >
              Find Hospitals
            </button>
          </div>
          <button 
            className="btn btn-danger btn-lg" 
            onClick={handleEmergency}
            style={{
              animation: 'pulse 2s infinite',
              boxShadow: '0 0 0 0 rgba(220, 53, 69, 0.7)'
            }}
          >
            Emergency
          </button>
        </div>
      </section>

      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(220, 53, 69, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(220, 53, 69, 0);
            }
          }

          .hero {
            max-height: 100vh;
            display: flex;
            align-items: center;
          }

          .form-control:focus {
            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
            border-color: #28a745;
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;