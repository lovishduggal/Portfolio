import Tania from '../../assets/Bg/bg.png';
function Hero() {
    return (
        <div
            className="hero min-h-[70vh] bg-base-200 text-center md:text-start"
            id="About">
            <div className="hero-content flex-col md:flex-row  shadow-2xl">
                <div className='p-8'>
                    {' '}
                    <img
                        src={Tania}
                        className="max-w-sm max-h-96 rounded-lg "
                    />
                </div>
                <div>
                    <h1 className="text-5xl font-extrabold">
                        Hello, <br />I am Tania Duggal
                    </h1>
                    <p className="py-6">
                        Through the power of words, I help people understand how
                        to use the software tools in their lives and careers,
                        empowering them to be as productive as possible.nisi.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
