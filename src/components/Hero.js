import React from 'react';
import './Hero.css' 
export default function Hero() {
  return (
    <section className="hero-section bg-gray-900 text-white py-20 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center lg:text-left">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Welcome to Shivanage Construction
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We build your dreams with precision, quality, and commitment. Let us help you bring your vision to life.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Get in Touch
            </a>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src="/path-to-your-hero-image.jpg"
              alt="Construction project"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
