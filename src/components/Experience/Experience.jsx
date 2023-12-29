function Experience() {
    return (
        <div className="max-w-7xl mx-auto my-16 p-4" id="Experience">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold">Experience</h2>
                <p>
                    My work experience as a Technical writer and working on
                    different projects.
                </p>
                <div className="space-y-4">
                    <div className=" flex flex-col w-full md:flex-row">
                        <div className="grid flex-grow h-40 card bg-base-300 rounded-box place-items-center">
                            content
                        </div>
                        <div className="divider md:divider-horizontal"></div>
                        <div className="grid flex-grow h-40 card bg-base-300 rounded-box place-items-center">
                            content
                        </div>
                    </div>

                    <div className="divider md:divider-horizontal"></div>

                    <div className="flex  flex-col w-full md:flex-row">
                        <div className="grid flex-grow h-40 card bg-base-300 rounded-box place-items-center">
                            content
                        </div>
                        <div className="divider md:divider-horizontal"></div>
                        <div className="grid flex-grow h-40 card bg-base-300 rounded-box place-items-center">
                            content
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
