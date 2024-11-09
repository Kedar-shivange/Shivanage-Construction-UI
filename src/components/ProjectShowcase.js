import React from 'react';
import Button from '../components/ui/button'; // Import Button component
import './ProjectShowcase.css';

// Define the projects array
const projects = [
  {
    id: 1,
    name: 'Skyline Tower',
    description: 'A 40-story luxury residential building with panoramic city views.',
    image: '/Feature Projects/Skyline Tower.jpg',
  },
  {
    id: 2,
    name: 'Green Valley Mall',
    description: 'An eco-friendly shopping center with over 100 retail spaces.',
    image: '/Feature Projects/Green Valley Mall.jpg',
  },
  {
    id: 3,
    name: 'Tech Hub Office Park',
    description: 'A modern office complex designed for tech startups and established companies.',
    image: '/Feature Projects/Tech Hub Office Park.jpg',
  },
];


export default function ProjectShowcase() {
  // Ensure projects array is defined
  if (!Array.isArray(projects) || projects.length === 0) {
    return <p>No featured projects available at the moment. Please check back later.</p>;
  }

  return (
    <section className="project-showcase-section">
      <div className="container mx-auto px-4">
        <h2 className="project-showcase-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                onError={(e) => e.target.src = '/fallback-image.jpg'} // Fallback image in case of error
              />
              <div className="project-description">
                <h3 className="project-title">{project.name}</h3>
                <p>{project.description}</p>
                <Button
                  variant="outline"
                  className="view-details-button"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
