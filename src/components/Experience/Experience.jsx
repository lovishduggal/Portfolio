import { experiences } from '../../data/constants';

function Experience() {
  return (
    <div className="max-w-7xl mx-auto my-16 p-4 relative" id="Experience">
      <div className="space-y-6">
        <h2 className="text-5xl  font-semibold text-center">Experience</h2>
        <p className="text-center text-lg">
          My work experience as a Technical writer and working on different
          projects.
        </p>

        <div className="space-y-4 ">
          <div className=" flex flex-col w-full md:flex-row justify-center">
            <div className="grid  h-auto card bg-base-300 rounded-box p-4  md:w-[400px]">
              <div className="flex justify-start gap-4 items-start h-[75px] ">
                <div className="w-14">
                  <img
                    src={experiences[0].companyImgURL}
                    className="rounded w-14 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {experiences[0].job}
                  </h3>
                  <span className="block text-sm  font-medium  base-content ">
                    {experiences[0].companyName}
                  </span>
                  <span className=" block text-[11px]">
                    {experiences[0].date}
                  </span>
                </div>
              </div>
              <p className="text-sm h-[95px] lg:h-[75px] ">
                {experiences[0].worked}
              </p>
            </div>
            <div className="divider md:divider-horizontal"></div>
            <div className="grid h-auto card bg-base-300 rounded-box p-4  md:w-[405px]  ">
              <div className="flex justify-start gap-4 items-start h-[75px] ">
                <div className="w-14">
                  <img
                    src={experiences[1].companyImgURL}
                    className="rounded w-14 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {experiences[1].job}
                  </h3>
                  <span className="block text-sm  font-medium  base-content ">
                    {experiences[1].companyName}
                  </span>
                  <span className=" block text-[11px]">
                    {experiences[1].date}
                  </span>
                </div>
              </div>
              <p className="text-sm h-[95px] lg:h-[75px] ">
                {experiences[1].worked}
              </p>
            </div>
          </div>

          <div className="divider max-w-[850px] mx-auto"></div>

          <div className=" flex flex-col w-full md:flex-row  justify-center">
            <div className="grid  h-auto card bg-base-300 rounded-box p-4  md:w-[405px]  ">
              <div className="flex justify-start gap-4 items-start h-[75px] ">
                <div className="w-14">
                  <img
                    src={experiences[2].companyImgURL}
                    className="rounded w-14 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {experiences[2].job}
                  </h3>
                  <span className="block text-sm  font-medium  base-content ">
                    {experiences[2].companyName}
                  </span>
                  <span className=" block text-[11px]">
                    {experiences[2].date}
                  </span>
                </div>
              </div>
              <p className="text-sm h-[95px] lg:h-[75px] ">
                {experiences[2].worked}
              </p>
            </div>
            <div className="divider md:divider-horizontal"></div>
            <div className="grid  h-auto card bg-base-300 rounded-box p-4  md:w-[405px]  ">
              <div className="flex justify-start gap-4 items-start h-[75px] ">
                <div className="w-14">
                  <img
                    src={experiences[3].companyImgURL}
                    className="rounded w-14 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {experiences[3].job}
                  </h3>
                  <span className="block text-sm  font-medium  base-content ">
                    {experiences[3].companyName}
                  </span>
                  <span className=" block text-[11px]">
                    {experiences[3].date}
                  </span>
                </div>
              </div>
              <p className="text-sm h-[95px] lg:h-[75px] ">
                {experiences[3].worked}
              </p>
            </div>
          </div>

          <div className="divider max-w-[850px] mx-auto"></div>

          <div className=" flex flex-col w-full md:flex-row  justify-center">
            <div className="grid  h-auto card bg-base-300 rounded-box p-4  md:w-[405px]  ">
              <div className="flex justify-start gap-4 items-start h-[75px] ">
                <div className="w-14">
                  <img
                    src={experiences[4].companyImgURL}
                    className="rounded w-14 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {experiences[4].job}
                  </h3>
                  <span className="block text-sm  font-medium  base-content ">
                    {experiences[4].companyName}
                  </span>
                  <span className=" block text-[11px]">
                    {experiences[4].date}
                  </span>
                </div>
              </div>
              <p className="text-sm h-[95px] lg:h-[75px] ">
                {experiences[4].worked}
              </p>
            </div>
            <div className="divider md:divider-horizontal"></div>
            <div className="grid  h-auto card bg-base-300 rounded-box p-4  md:w-[405px]  ">
              <div className="flex justify-start gap-4 items-start h-[75px] ">
                <div className="w-14">
                  <img
                    src={experiences[5].companyImgURL}
                    className="rounded w-14 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {experiences[5].job}
                  </h3>
                  <span className="block text-sm  font-medium  base-content ">
                    {experiences[5].companyName}
                  </span>
                  <span className=" block text-[11px]">
                    {experiences[5].date}
                  </span>
                </div>
              </div>
              <p className="text-sm h-[95px] lg:h-[75px] ">
                {experiences[5].worked}
              </p>
            </div>
          </div>
          <div className="divider max-w-[850px] mx-auto"></div>

          <div className=" flex flex-col w-full md:flex-row  justify-center">
            <div className="grid  h-auto card bg-base-300 rounded-box p-4  md:w-[405px]  ">
              <div className="flex justify-start gap-4 items-start h-[75px] ">
                <div className="w-14">
                  <img
                    src={experiences[6].companyImgURL}
                    className="rounded w-14 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {experiences[6].job}
                  </h3>
                  <span className="block text-sm  font-medium  base-content ">
                    {experiences[6].companyName}
                  </span>
                  <span className=" block text-[11px]">
                    {experiences[6].date}
                  </span>
                </div>
              </div>
              <p className="text-sm h-[95px] lg:h-[75px] ">
                {experiences[6].worked}
              </p>
            </div>
            <div className="divider md:divider-horizontal"></div>
            <div className="grid  h-auto card bg-base-300 rounded-box p-4  md:w-[405px]  ">
              <div className="flex justify-start gap-4 items-start h-[75px] ">
                <div className="w-14">
                  <img
                    src={experiences[7].companyImgURL}
                    className="rounded w-14 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {experiences[7].job}
                  </h3>
                  <span className="block text-sm  font-medium  base-content ">
                    {experiences[7].companyName}
                  </span>
                  <span className=" block text-[11px]">
                    {experiences[7].date}
                  </span>
                </div>
              </div>
              <p className="text-sm h-[95px] lg:h-[75px] ">
                {experiences[7].worked}
              </p>
            </div>
          </div>
          <div className="divider max-w-[850px] mx-auto"></div>

          <div className=" flex flex-col w-full md:flex-row  justify-center">
            <div className="grid  h-auto card bg-base-300 rounded-box p-4  md:w-[405px]  ">
              <div className="flex justify-start gap-4 items-start h-[75px] ">
                <div className="w-14">
                  <img
                    src={experiences[8].companyImgURL}
                    className="rounded w-14 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold">
                    {experiences[8].job}
                  </h3>
                  <span className="block text-sm  font-medium  base-content ">
                    {experiences[8].companyName}
                  </span>
                  <span className=" block text-[11px]">
                    {experiences[8].date}
                  </span>
                </div>
              </div>
              <p className="text-sm h-[95px] lg:h-[75px] ">
                {experiences[8].worked}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
