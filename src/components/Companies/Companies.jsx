import { useEffect, useRef } from 'react';
import { companies } from '../../data/constants';

function CompanyLogos() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const animate = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
    };

    const animation = setInterval(animate, 10);
    return () => clearInterval(animation);
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-16  p-4 overflow-hidden">
      <div className="space-y-8">
        <h2 className="text-5xl font-semibold text-center w-full">
          Trusted By
        </h2>
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex items-center space-x-16 overflow-hidden"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="company-item flex-shrink-0 items-center"
              >
                <div>
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-20  object-fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogos;
