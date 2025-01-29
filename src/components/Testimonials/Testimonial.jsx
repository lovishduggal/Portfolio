import { testimonials } from '../../data/constants';
import { useEffect } from 'react';

function Testimonial() {
  // Add useEffect for auto-sliding
  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        carousel.scrollLeft += carousel.offsetWidth;
        // Reset scroll position if we reach the end
        if (
          carousel.scrollLeft >=
          carousel.scrollWidth - carousel.offsetWidth
        ) {
          carousel.scrollLeft = 0;
        }
      }, 2000); // Slides every 3 seconds
    };

    startAutoScroll();

    // Pause auto-scroll on hover
    carousel.addEventListener('mouseenter', () =>
      clearInterval(scrollInterval)
    );
    carousel.addEventListener('mouseleave', startAutoScroll);

    // Cleanup
    return () => {
      clearInterval(scrollInterval);
      carousel.removeEventListener('mouseenter', () =>
        clearInterval(scrollInterval)
      );
      carousel.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);

  // Prevent default scroll behavior
  useEffect(() => {
    const preventScroll = (e) => {
      if (e.target.closest('.carousel')) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    return () => window.removeEventListener('wheel', preventScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-16  p-4">
      <div className="space-y-8">
        <h2 className="text-5xl font-semibold text-center w-full">
          Testimonials
        </h2>
        <p className="text-center md:w-[700px] mx-auto text-lg">
          Do you want to know what our amazing readers have to say? We&#39;ve
          got some fascinating feedback that you won&#39;t want to miss!
        </p>
        <div className="flex items-center justify-center">
          <div className="carousel carousel-center rounded-box gap-4 w-full max-w-5xl">
            {testimonials.map((testimonial) => (
              <div key={testimonial.message} className="carousel-item w-1/3">
                <div
                  className="h-[280px] card bg-base-300 rounded-box place-items-center justify-center p-4 tooltip w-full"
                  data-tip="hello"
                >
                  {' '}
                  <div className="w-[280px] flex items-center justify-center flex-col gap-4">
                    <div className="avatar">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={testimonial.imgURL} />
                      </div>
                    </div>
                    <div>{testimonial.name}</div>
                    <p className=" text-center text-base h-[72px]">
                      {testimonial.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
