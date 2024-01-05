import Tania from '../../assets/Bg/bg.png';
function Hero() {
    return (
        <div
            className="hero min-h-[80vh] bg-base-200 text-center md:text-start"
            id="About">
            <div className="hero-content flex-col md:flex-row  shadow-2xl">
                <div className="p-8">
                    {' '}
                    <img
                        src={Tania}
                        className="max-w-sm max-h-96 rounded-lg "
                    />
                </div>
                <div className="space-y-4">
                    <h1 className="text-6xl font-bold">
                        Hi, I am <br />
                        Tania Duggal
                    </h1>
                    <div>
                        <div className="text-2xl font-semibold ">
                            I am a DevOps Writer
                        </div>
                        <p className="text-xl font-normal py-2">
                            Through the power of words, I help people understand
                            how to use the software tools in their lives and
                            careers, empowering them to be as productive as
                            possible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
