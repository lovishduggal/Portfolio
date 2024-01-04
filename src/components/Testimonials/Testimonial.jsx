import { testimonials } from '../../data/constants';

function Testimonial() {
    return (
        <div className="max-w-7xl mx-auto my-16 mt-32 p-4" id="">
            <div className="space-y-8">
                <h2 className="text-4xl font-bold text-center">Testimonials</h2>
                <p className="text-center md:w-[700px] mx-auto text-lg">
                    Do you want to know what our amazing readers have to say?
                    We&#39;ve got some fascinating feedback that you won&#39;t
                    want to miss!
                </p>
                <div className="flex items-center justify-center">
                    <div className="carousel carousel-center rounded-box gap-4">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.message}
                                className="carousel-item">
                                <div className="h-[280px] card bg-base-300 rounded-box place-items-center justify-center p-4 ">
                                    {' '}
                                    <div className="w-[280px] flex items-center justify-center flex-col gap-4">
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={testimonial.imgURL} />
                                            </div>
                                        </div>
                                        <div>{testimonial.name}</div>
                                        <p className="text-center text-base h-[72px]">
                                            <p>{testimonial.message}.</p>
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
