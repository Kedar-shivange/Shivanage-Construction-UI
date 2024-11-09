import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Pankya Hindu',
    role: 'Homeowner',
    image: '/Pavan Kokare/IMG_E8559.JPG?height=100&width=100',
    quote: 'The team at Construction Co. turned our dream home into a reality. Their attention to detail and professionalism were outstanding.',
    rating: 5,  // Dynamic rating
  },
  {
    id: 2,
    name: 'Angrej Athya',
    role: 'Business Owner',
    image: '/Pavan Kokare/IMG_E8809.JPG?height=100&width=100',
    quote: 'Our new office space is exactly what we envisioned. Construction Co. delivered on time and within budget. Highly recommended!',
    rating: 4,  // Dynamic rating
  },
  {
    id: 3,
    name: 'Mahya Builder',
    role: 'Property Developer',
    image: '/Pavan Kokare/IMG_E8973.JPG?height=100&width=100',
    quote: 'I\'ve worked with many construction firms, but Construction Co. stands out for their quality and reliability. They\'re my go-to for all projects.',
    rating: 5,  // Dynamic rating
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="client-image" // Added class for styling
            />
          </div>
          <blockquote>
            "{testimonials[currentTestimonial].quote}"
          </blockquote>
          <div className="client-info">
            <p className="client-name">{testimonials[currentTestimonial].name}</p>
            <p className="client-role">{testimonials[currentTestimonial].role}</p>
          </div>
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`star ${i < testimonials[currentTestimonial].rating ? 'filled' : ''}`} />
            ))}
          </div>
          <div className="navigation-buttons">
            <button onClick={prevTestimonial} className="nav-button">
              <ChevronLeft />
            </button>
            <button onClick={nextTestimonial} className="nav-button">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
