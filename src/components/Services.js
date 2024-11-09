import React, { useState, useEffect } from 'react';
import { Home, Building2, Hammer, ClipboardList } from 'lucide-react';
import { fetchServices } from '../services/api'; // Import the fetchServices function
import './Services.css'; // Import the CSS file

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices()
      .then(response => {
        setServices(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setError('Failed to load services. Please try again later.');
        setLoading(false);
      });
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Home': return <Home className="service-icon" />;
      case 'Building2': return <Building2 className="service-icon" />;
      case 'Hammer': return <Hammer className="service-icon" />;
      case 'ClipboardList': return <ClipboardList className="service-icon" />;
      default: return null;
    }
  };

  if (loading) return <p>Loading services...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="services-section">
      <div className="container mx-auto px-4">
        <h2 className="services-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{getIcon(service.iconName)}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
