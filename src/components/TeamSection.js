import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { fetchTeamMembers } from '../services/api'; // Import the fetchTeamMembers function
import './TeamSection.css';

// Component to display the team section
export default function TeamSection() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTeamMembers()
      .then(response => {
        setTeam(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching team members:', error);
        setError('Failed to load team members. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading team members...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(team) && team.length > 0 ? (
            team.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.imageUrl} // Assuming imageUrl is returned from the backend
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="social-icons">
                    <a href={member.social?.facebook}>
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href={member.social?.twitter}>
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href={member.social?.linkedin}>
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-team">No team members available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
