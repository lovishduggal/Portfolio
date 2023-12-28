function Contact() {
    return (
        <div className="max-w-7xl mx-auto my-16  p-4" id="">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold">Contact</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    ab neque explicabo ipsa? Quidem, a. Totam recusandae
                    aspernatur tempore delectus?
                </p>
                <div className="flex items-center justify-center">
                    <div className="w-[400px] sm:w-[500px]">
                        <h3 className="text-3xl font-medium">Email Us</h3>
                        <form className="card-body p-6 border rounded-xl textarea-bordered">
                            <div className="form-control">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <textarea
                                className="textarea textarea-bordered resize-none text-base"
                                required
                                placeholder="Message"></textarea>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
