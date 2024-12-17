// src/pages/Services.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('There was an error fetching services!', error));
  }, []);

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
