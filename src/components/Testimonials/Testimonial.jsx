import CarouselCrossfade from './Carousel';

function Testimonial() {
    return (
        <div className="max-w-7xl mx-auto my-16 mt-32 p-4" id="">
            <div className="space-y-8">
                <h2 className="text-4xl font-bold">Testimonials</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    ab neque explicabo ipsa? Quidem, a. Totam recusandae
                    aspernatur tempore delectus?
                </p>
                <div className="flex items-center justify-center">
                    <CarouselCrossfade />
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
