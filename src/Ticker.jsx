import React from 'react';
import './Ticker.css';
// import './Ticker.js'

const Ticker = ({ items = [
  "City Hospital: 5 beds available",
  "Central Medical Center: 3 beds available",
  "St. John's Hospital: 7 beds available",
  "Community Health Center: 2 beds available"
] }) => {
  return (
    <section className="ticker-section">
      <div className="ticker-container">
        <div className="ticker-content">
          {/* Duplicate items to create seamless loop */}
          {[...items, ...items].map((item, index) => (
            <span key={index} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ticker;