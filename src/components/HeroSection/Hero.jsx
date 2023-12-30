function Hero() {
    return (
        <div className="hero min-h-[60vh] bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <img
                    src="https://pbs.twimg.com/profile_images/1732761167247101952/WLF85TmP_400x400.jpg"
                    className="max-w-[18rem] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-extrabold">
                        Hello, <br />I am Tania Duggal
                    </h1>
                    <p className="py-6">
                        Through the power of words, I help people understand how
                        to use the software tools in their lives and careers,
                        empowering them to be as productive as possible.nisi.
                    </p>
                    {/* Remove this btn  */}
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
