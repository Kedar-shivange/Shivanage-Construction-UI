import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import './Footer.css'; // Import the CSS file
import Button from '../components/ui/button'; // Import your Button component

const socialLinks = [
  { icon: <Facebook className="w-6 h-6" />, link: 'https://www.facebook.com/kedar.shivange.1/', text: 'Facebook' },
  { icon: <Twitter className="w-6 h-6" />, link: 'https://x.com/k_shivanage', text: 'Twitter' },
  { icon: <Instagram className="w-6 h-6" />, link: 'https://www.instagram.com/kedar_shivange/', text: 'Instagram' },
  { icon: <Linkedin className="w-6 h-6" />, link: 'https://www.linkedin.com/in/kedar-shivanage', text: 'LinkedIn' }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Header Content in Footer */}
        <div className="footer__header-content">
          <div className="footer__contact">
            <span className="footer__contact-container">
              <Phone className="w-4 h-4" />
              <a href="tel:+918485036808" className="footer__contact-link" aria-label="Call +91 8485036808">
                +91 8485036808
              </a>
            </span>
            <span className="footer__contact-container">
              <Mail className="w-4 h-4" />
              <a href="mailto:bms@constructionco.com" className="footer__contact-link" aria-label="Send an email to Shivanage@gmail.com">
                Shivanage@gmail.com
              </a>
            </span>
          </div>
          <div className="footer__buttons">
            <Button 
              variant="outline" 
              size="sm" 
              className="footer__button footer__button--secondary" 
              aria-label="Contact us"
              onClick={() => window.location.href = '/contact'} // Navigate to contact page
            >
              Contact Us
            </Button>
          </div>
        </div>
        {/* Footer Content */}
        <div>
          <h3 className="footer__title">Contact Info</h3>
          <div className="footer__contact-info">
            <p className="footer__description">Hinjewadi, Pune, Maharastra</p>
            <p className="footer__description">Phone: 7066640359</p>
            <p className="footer__description">Email: kedarbs@constructionco.com</p>
          </div>
        </div>
        <div>
          <h3 className="footer__title">Follow Us</h3>
          <div className="footer__social">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                className="footer__social-button"
                onClick={() => window.open(social.link)}
                aria-label={`Follow us on ${social.text}`}
              >
                {social.icon} {social.text}
              </Button>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2023 Construction Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
