import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

const slides = [
  {
    image: '/Slider Images/Modern Office Center.jpg?height=600&width=1200',
    title: 'Modern Office Complex',
    location: 'Downtown Metro',
    size: '50,000 sq ft',
    completionDate: 'June 2023',
  },
  {
    image: '/Slider Images/Luxury-Residential-Tower.jpg?height=600&width=1200',
    title: 'Luxury Residential Tower',
    location: 'Seaside Heights',
    size: '75,000 sq ft',
    completionDate: 'December 2023',
  },
  {
    image: '/Slider Images/Sustainable Shopping Center.jpg?height=600&width=1200',
    title: 'Sustainable Shopping Center',
    location: 'Green Valley',
    size: '100,000 sq ft',
    completionDate: 'March 2024',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="hero-slider"
      role="region"
      aria-live="polite"
      aria-label="Property slider showcasing construction projects"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slider__slide ${
            index === currentSlide ? 'hero-slider__slide--active' : ''
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}  // Already descriptive alt text
            className="hero-slider__image"
          />
          <div className="hero-slider__content">
            <h2 className="hero-slider__title">{slide.title}</h2>
            <p className="hero-slider__detail">Location: {slide.location}</p>
            <p className="hero-slider__detail">Size: {slide.size}</p>
            <p className="hero-slider__detail">Completion: {slide.completionDate}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="hero-slider__button hero-slider__button--left"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="hero-slider__button hero-slider__button--right"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
