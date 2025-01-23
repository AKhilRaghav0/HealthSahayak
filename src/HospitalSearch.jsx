import React, { useState } from 'react';

const HospitalSearch = () => {
  const [city, setCity] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState('');

  // Static hospital data
  const hospitalData = [
    { name: 'City Hospital', city: 'New York' },
    { name: 'Green Valley Medical Center', city: 'Los Angeles' },
    { name: 'Sunrise Hospital', city: 'Chicago' },
    { name: 'Wellness Center', city: 'Houston' },
    { name: 'Downtown Hospital', city: 'New York' },
    { name: 'Metro Medical', city: 'Los Angeles' },
  ];

  // Updated handleSearch function
  const handleSearch = () => {
    console.log('Search button clicked!'); // Debugging message
    if (!city.trim()) {
      setError('Please enter a valid city!');
      setHospitals([]);
      return;
    }
    setError('');
    const results = hospitalData.filter(
      (hospital) => hospital.city.toLowerCase() === city.toLowerCase()
    );
    console.log('Search results:', results); // Debugging the search results
    setHospitals(results);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Search for Hospitals</h2>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            console.log('City input:', e.target.value); // Debugging city input
          }}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
            width: '300px',
          }}
        />
        <button
          onClick={() => {
            handleSearch();
            console.log('Hospitals state after search:', hospitals); // Debugging hospitals state
          }}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
        {hospitals.map((hospital, index) => (
          <li key={index} style={{ margin: '5px 0', fontWeight: 'bold' }}>
            {hospital.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalSearch;
