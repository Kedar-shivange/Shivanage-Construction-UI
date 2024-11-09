import React from 'react';
import Button from '../components/ui/button';
import './PromotionalBanner.css';

export default function PromotionalBanner() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8">
          Let's discuss your construction needs and bring your vision to life.
        </p>
        <Button size="lg" variant="secondary">
          Request a Quote
        </Button>
      </div>
    </section>
  );
}
