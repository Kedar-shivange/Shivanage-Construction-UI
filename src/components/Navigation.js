import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
    { name: 'CHatbot', href: '/chatbot' },
  ];

  return (
    <nav className={`nav ${isOpen ? 'nav--open' : ''} ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto px-4 nav__menu flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="nav__link" aria-label={item.name}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="nav__menu-button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav__mobile-menu">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="nav__link">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
