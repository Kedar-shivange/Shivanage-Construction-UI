import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Button from '../components/ui/button';
import Select from '../components/ui/select';
import Input from '../components/ui/input';
import './ProjectOverview.css';

const projects = [
  { id: 1, name: 'Modern Office Complex', type: 'Commercial', location: 'Downtown Metro', size: '50,000 sq ft', status: 'Completed', image: '/Body images/Modern Office Complex.jpg?height=200&width=300' },
  { id: 2, name: 'Luxury Residential Tower', type: 'Residential', location: 'Seaside Heights', size: '75,000 sq ft', status: 'Ongoing', image: '/Body images/Luxury Residential Tower.jpg?height=200&width=300' },
  { id: 3, name: 'Industrial Warehouse', type: 'Industrial', location: 'Logistics Park', size: '100,000 sq ft', status: 'Completed', image: '/Body images/Industrial Warehouse.jpg?height=200&width=300' },
  { id: 4, name: 'Shopping Mall Renovation', type: 'Commercial', location: 'City Center', size: '80,000 sq ft', status: 'Ongoing', image: '/Body images/Shopping Mall Renovation.jpg?height=200&width=300' },
];

export default function ProjectOverview() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filters, setFilters] = useState({ type: '', location: '', size: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const filtered = projects.filter(project => {
      return (
        (filters.type === '' || project.type === filters.type) &&
        (filters.location === '' || project.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (filters.size === '' || project.size.toLowerCase().includes(filters.size.toLowerCase()))
      );
    });
    setFilteredProjects(filtered);
  };

  return (
    <section className="project-overview" aria-labelledby="project-overview">
      <div className="container">
        <h2 id="project-overview">Our Projects</h2>
        <div className="filter-controls" aria-label="Project filters">
          <Select name="type" onChange={handleFilterChange} aria-label="Filter by project type">
            <option value="">All Types</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
          </Select>

          <Input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleFilterChange}
            aria-label="Filter by location"
          />
          <Input
            type="text"
            name="size"
            placeholder="Size Range"
            onChange={handleFilterChange}
            aria-label="Filter by size"
          />

          <Button onClick={applyFilters} className="flex items-center" aria-label="Apply filters">
            <Search className="mr-2" />
            Search
          </Button>
        </div>

        <div className="project-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.name} />
                <div className="project-card-content">
                  <h3>{project.name}</h3>
                  <p>Type: {project.type}</p>
                  <p>Location: {project.location}</p>
                  <p>Size: {project.size}</p>
                  <p className={`project-status-${project.status.toLowerCase()}`}>
                    Status: {project.status}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No projects match your filters.</p>
          )}
        </div>
      </div>
    </section>
  );
}
