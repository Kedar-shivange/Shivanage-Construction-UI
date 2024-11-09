import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchProjects = () => api.get('/projects');
export const fetchServices = () => api.get('/services');
export const fetchTeamMembers = () => api.get('/team-members');
export const fetchTestimonials = () => api.get('/testimonials');

// Add more API calls as needed

export default api;