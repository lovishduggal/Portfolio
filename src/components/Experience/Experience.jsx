import { experiences } from '../../data/constants';

function Experience() {
    return (
        <div className="max-w-7xl mx-auto my-16 p-4 relative" id="Experience">
            <div className="space-y-8">
                <h2 className="text-5xl font-bold text-center">Experience</h2>
                <p className="text-center">
                    My work experience as a Technical writer and working on
                    different projects.
                </p>
                <div className="space-y-4">
                    <div className=" flex flex-col w-full md:flex-row">
                        <div className="grid flex-grow h-auto card bg-base-300 rounded-box p-4 space-y-4 md:w-[418px]">
                            <div className="flex justify-start gap-4">
                                <div className="w-14">
                                    <img
                                        src={experiences[0].companyImgURL}
                                        className="rounded w-14 mt-1"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium">
                                        {experiences[0].job}
                                    </h3>
                                    <span className="block text-sm base-content ">
                                        {experiences[0].companyName}
                                    </span>
                                    <span className=" block text-[11px]">
                                        {experiences[0].date}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm">{experiences[0].worked}</p>
                        </div>
                        <div className="divider md:divider-horizontal"></div>
                        <div className="grid flex-grow h-auto card bg-base-300 rounded-box p-4 space-y-4 md:w-[418px]">
                            <div className="flex justify-start gap-4">
                                <div className="w-14">
                                    <img
                                        src={experiences[1].companyImgURL}
                                        className="rounded w-14 mt-1"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium">
                                        {experiences[1].job}
                                    </h3>
                                    <span className="block text-sm base-content ">
                                        {experiences[1].companyName}
                                    </span>
                                    <span className=" block text-[11px]">
                                        {experiences[1].date}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm">{experiences[1].worked}</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className=" flex flex-col w-full md:flex-row">
                        <div className="grid flex-grow h-auto card bg-base-300 rounded-box p-4 space-y-4 md:w-[418px]">
                            <div className="flex justify-start gap-4">
                                <div className="w-14">
                                    <img
                                        src={experiences[2].companyImgURL}
                                        className="rounded w-14 mt-1"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium">
                                        {experiences[2].job}
                                    </h3>
                                    <span className="block text-sm base-content ">
                                        {experiences[2].companyName}
                                    </span>
                                    <span className=" block text-[11px]">
                                        {experiences[2].date}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm">{experiences[2].worked}</p>
                        </div>
                        <div className="divider md:divider-horizontal"></div>
                        <div className="grid flex-grow h-auto card bg-base-300 rounded-box p-4 space-y-4 md:w-[418px]">
                            <div className="flex justify-start gap-4">
                                <div className="w-14">
                                    <img
                                        src={experiences[3].companyImgURL}
                                        className="rounded w-14 mt-1"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium">
                                        {experiences[3].job}
                                    </h3>
                                    <span className="block text-sm base-content ">
                                        {experiences[3].companyName}
                                    </span>
                                    <span className=" block text-[11px]">
                                        {experiences[3].date}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm">{experiences[3].worked}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
