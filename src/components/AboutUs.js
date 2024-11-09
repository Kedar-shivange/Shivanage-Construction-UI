import React from 'react';
import Button from '../components/ui/button';
import './AboutUs.css';

export default function AboutUs() {
  return React.createElement(
    'section',
    { className: 'about-us-section' },
    React.createElement(
      'div',
      { className: 'about-us-container' },
      React.createElement(
        'div',
        { className: 'about-us-content md:flex-row items-center' },
        React.createElement(
          'div',
          { className: 'about-us-image-wrapper md:w-1/2 mb-8 md:mb-0' },
          React.createElement("img", {
            src: '/Body images/About Our Construction Company.jpg?height=400&width=600',
            alt: 'Construction team',
            className: 'about-us-image'
          })
        ),
        React.createElement(
          'div',
          { className: 'about-us-text-content md:w-1/2 md:pl-12' },
          React.createElement('h2', { className: 'about-us-title' }, 'About Our Construction Company'),
          React.createElement(
            'p',
            { className: 'about-us-paragraph' },
            'With over 25 years of experience in the construction industry, our company has established itself as a leader in delivering high-quality construction projects. We specialize in residential, commercial, and industrial construction, always adhering to the highest standards of craftsmanship and safety.'
          ),
          React.createElement(
            'p',
            { className: 'about-us-paragraph' },
            'Our team of skilled professionals is committed to excellence, innovation, and customer satisfaction. We pride ourselves on our ability to tackle complex projects, meet tight deadlines, and exceed our clients\' expectations.'
          ),
          React.createElement(
            'ul',
            { className: 'about-us-list' },
            React.createElement('li', { className: 'about-us-list-item' }, '25+ years of industry experience'),
            React.createElement('li', { className: 'about-us-list-item' }, 'Certified and skilled professionals'),
            React.createElement('li', { className: 'about-us-list-item' }, 'Commitment to safety and quality'),
            React.createElement('li', { className: 'about-us-list-item' }, 'Innovative construction techniques'),
            React.createElement('li', { className: 'about-us-list-item' }, 'Sustainable building practices')
          ),
          React.createElement(Button, { size: 'lg', className: 'about-us-button' }, 'Learn More About Us')
        )
      )
    )
  );
}
