import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__branding">
          <img 
            src="/Logos/Logo.jpg" 
            alt="Shivanage Construction Logo" 
            className="header__logo"
          />
        </div>

        {/* Optional tagline or slogan */}
        <div className="header__tagline">
          <p>Your trusted partner in construction</p>
        </div>
      </div>
    </header>
  );
}
