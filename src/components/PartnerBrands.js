import React, { useRef, useEffect } from 'react';
import './PartnerBrands.css'; // Import the CSS file

const brands = [
  { name: 'Brand 1', logo: '/Partners Brands/A.jpg?height=100&width=200' },
  { name: 'Brand 2', logo: '/Partners Brands/B.jpg?height=100&width=200' },
  { name: 'Brand 3', logo: '/Partners Brands/C.jpg?height=100&width=200' },
  { name: 'Brand 4', logo: '/Partners Brands/D.jpg?height=100&width=200' },
  { name: 'Brand 5', logo: '/Partners Brands/P.jpg?height=100&width=200' },
  { name: 'Brand 6', logo: '/Partners Brands/S.jpg?height=100&width=200' },
];

export default function PartnerBrands() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      let scrollAmount = 0;
      const scrollMax = slider.scrollWidth - slider.clientWidth;

      const scroll = () => {
        scrollAmount += 1;
        if (scrollAmount > scrollMax) {
          scrollAmount = 0;
        }
        slider.scrollTo(scrollAmount, 0);
      };

      const intervalId = setInterval(scroll, 30);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section className="partner-brands">
      <div className="container mx-auto px-4">
        <h2 className="partner-brands__title">Our Partners</h2>
        <div className="partner-brands__slider" ref={sliderRef}>
          <div className="partner-brands__inner">
            {/* Duplicate the brands array to create an infinite scroll effect */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="partner-brands__brand">
                <img src={brand.logo} alt={brand.name} className="partner-brands__logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
