// App.js
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
import Contact from './pages/Contact'; // Correct import path
import './components/Styles/Style.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSlider />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<ProjectOverview />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/promotional-banner" element={<PromotionalBanner />} />
            <Route path="/header" element={<Header/>} />
            <Route path="/contact" element={<Contact />} /> {/* Updated to render Contact */}
          </Routes>
          {/* Other components, if required on all pages */}
          <ProjectShowcase />
          <WhyChooseUs />
          <PartnerBrands />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
