function Hero() {
    return (
        <div className="hero min-h-[60vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://pbs.twimg.com/profile_images/1732761167247101952/WLF85TmP_400x400.jpg"
                    className="max-w-[18rem] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
