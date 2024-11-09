import React from 'react';
import { CheckCircle, Clock, Leaf, ThumbsUp } from 'lucide-react';
import './WhyChooseUs.css'

const reasons = [
  {
    icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
    title: 'Quality Assurance',
    description: 'We adhere to the highest standards of quality in every project we undertake.',
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: 'On-Time Delivery',
    description: 'We understand the importance of timelines and always strive to deliver on schedule.',
  },
  {
    icon: <Leaf className="w-12 h-12 text-blue-600" />,
    title: 'Eco-Friendly Practices',
    description: 'Our construction methods prioritize sustainability and environmental responsibility.',
  },
  {
    icon: <ThumbsUp className="w-12 h-12 text-blue-600" />,
    title: 'Customer Satisfaction',
    description: 'We go above and beyond to ensure our clients are happy with the final result.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
