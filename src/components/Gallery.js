import React from 'react';
import Button from '../components/ui/button';
import './Gallery.css';

const galleryItems = [
  { id: 1, title: 'Cityscape', image: '/Gallery/Cityscape.jpeg' },
  { id: 2, title: 'Seaside Villa', image: '/Gallery/Seaside Villa.jpeg' },
  { id: 3, title: 'Mountain Retreat', image: '/Gallery/Mountain Retreat.jpeg' },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Gallery</h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} className="gallery-image" />
              <h3 className="gallery-item-title">{item.title}</h3>
              <Button className="gallery-button">View Details</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
