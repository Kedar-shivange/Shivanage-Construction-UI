import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSlider from './components/HeroSlider';
import ProjectOverview from './components/ProjectOverview';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ProjectShowcase from './components/ProjectShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import PromotionalBanner from './components/PromotionalBanner';
import PartnerBrands from './components/PartnerBrands';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Gallery from './components/Gallery'; // Import Gallery component

import './App.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation and Header */}
      <Navigation />
      <Header />
      {/* Main Content */}
      <main className="flex-grow">
        <HeroSlider />
        <AboutUs />
        <Services />
        <Gallery />
        <PromotionalBanner/>
        <ProjectShowcase />
        <Blog/>
        <WhyChooseUs />
        <PartnerBrands />
        <Testimonials/>
      </main>
      {/* Footer and Chatbot */}
      <Footer />
    </div>
  );
}
export default App;