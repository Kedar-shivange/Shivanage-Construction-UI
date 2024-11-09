import { Button } from "@/components/ui/button";
import './HeroSection.css'; // Import the CSS file

export default function HeroSection() {
  return (
    <section className="hero-section flex items-center justify-center">
      <div className="hero-section__container">
        <h1 className="hero-section__title">Building Your Dreams</h1>
        <p className="hero-section__description">High-quality construction services tailored to your needs.</p>
        
        <Button 
          size="lg" 
          variant="secondary" 
          aria-label="Start your construction project now"
        >
          Get Started
        </Button>
        
        <div className="mt-8">
          <img 
            src={`${process.env.PUBLIC_URL}/placeholder.svg`} 
            alt="Construction workers working on a building site"  // More descriptive alt text
            className="hero-section__image" 
          />
        </div>
      </div>
    </section>
  );
}
