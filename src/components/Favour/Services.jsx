function Services() {
    return (
        <div className="max-w-7xl mx-auto my-16 p-4" id="Services">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold">Services</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    ab neque explicabo ipsa? Quidem, a. Totam recusandae
                    aspernatur tempore delectus?
                </p>
                <div>
                    <ul className="steps steps-vertical">
                        <li className="step step-primary">User guides</li>
                        <li className="step step-primary">
                            Long form tutorials
                        </li>
                        <li className="step step-primary">Blogs & Articles</li>
                        <li className="step step-primary">
                            {' '}
                            Implementation Guides
                        </li>
                        <li className="step step-primary">
                            {' '}
                            Product documentation
                        </li>
                        <li className="step step-primary">Online help</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;
