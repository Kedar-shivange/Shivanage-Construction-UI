import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// Existing API calls
export const fetchProjects = () => api.get('/projects');
export const fetchServices = () => api.get('/services');
export const fetchTeamMembers = () => api.get('/team-members');
export const fetchTestimonials = () => api.get('/testimonials');

// New API calls for additional components

export const fetchAboutUs = () => api.get('/about-us');
export const fetchBlogPosts = () => api.get('/blog'); // Could also be paginated or filtered
export const fetchBlogSection = (sectionId) => api.get(`/blog/section/${sectionId}`);
export const fetchChatbotResponses = () => api.get('/chatbot/responses'); // Example for chatbot
export const fetchFeaturedProjects = () => api.get('/featured-projects');
export const fetchFooterContent = () => api.get('/footer');
export const fetchGalleryImages = () => api.get('/gallery');
export const fetchHeaderContent = () => api.get('/header');
export const fetchHeroContent = () => api.get('/hero');
export const fetchHeroSectionContent = () => api.get('/hero-section');
export const fetchHeroSliderImages = () => api.get('/hero-slider');
export const fetchPartnerBrands = () => api.get('/partner-brands');
export const fetchProjectOverview = (projectId) => api.get(`/projects/overview/${projectId}`);
export const fetchPromotionalBanner = () => api.get('/promotional-banner');
export const fetchWhyChooseUsContent = () => api.get('/why-choose-us');
export const fetchContactInfo = () => api.get('/contact');

// Specific components with additional features
export const fetchNavigationMenu = () => api.get('/navigation');
export const fetchLogin = (credentials) => api.post('/login', credentials); // Example for login
export const fetchPreloader = () => api.get('/preloader');
export const fetchProjectShowcase = () => api.get('/project-showcase');
export const fetchServicesList = () => api.get('/services');
export const fetchTeamSection = () => api.get('/team-section');
export const fetchTestimonialsList = () => api.get('/testimonials');

export default api;
