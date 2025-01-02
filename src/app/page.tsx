import Image from "next/image";
import { jobData } from "@/data/job-data";

export default function Home() {
  // const job = jobData[0];
  return (
    <div className={"flex flex-col gap-y-6 px-[165px]"}>
      {jobData.map((job, index) => (
        <div key={index} className={"shadow-custom-shadow flex items-center gap-x-6 rounded-[5px] px-10 py-8"}>
          <Image src={job.logo} alt="Company logo" width={88} height={88} />
          <div>
            <div className={"flex items-end gap-x-[15px]"}>
              <h2 className={"text-heading-18px-bold text-desaturated-dark-cyan"}>{job.company}</h2>
              {job.new || job.featured ? (
                <>
                  <div className={"flex gap-x-2"}>
                    {job.new && <h3 className={"text-new-featured inline rounded-full bg-desaturated-dark-cyan px-2 pb-[3px] pt-[7px] text-center uppercase text-white"}>New!</h3>}
                    {job.featured && <h3 className={"text-new-featured inline rounded-full bg-very-dark-grayish-cyan px-2 pb-[3px] pt-[7px] text-center uppercase text-white"}>Featured</h3>}
                  </div>
                </>
              ) : null}
            </div>
            <div>
              <p className={"text-heading-22px-bold pt-2.5"}>{job.position}</p>
              <div className={"text-subheading-18px-medium flex items-center gap-x-4 pt-[7px] text-dark-grayish-cyan"}>
                {job.postedAt}{" "}
                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#B7C4C4" />
                </svg>
                {job.contract}{" "}
                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#B7C4C4" />
                </svg>
                {job.location}
              </div>
            </div>
          </div>
          <div className={"ml-auto inline-flex gap-x-4"}>
            {job.role && <h4 className={"text-body-16px-bold inline bg-light-grayish-cyan-filter px-[9px] pb-[3px] pt-[5px] text-desaturated-dark-cyan"}>{job.role}</h4>}
            {job.level && <h4 className={"text-body-16px-bold inline bg-light-grayish-cyan-filter px-[9px] pb-[3px] pt-[5px] text-desaturated-dark-cyan"}>{job.level}</h4>}
            {job.languages.length > 0 &&
              job.languages.map((language) => (
                <h4 key={language} className={"text-body-16px-bold inline bg-light-grayish-cyan-filter px-[9px] pb-[3px] pt-[5px] text-desaturated-dark-cyan"}>
                  {language}
                </h4>
              ))}
            {job.tools.length > 0 &&
              job.tools.map((tool) => (
                <h4 key={tool} className={"text-body-16px-bold inline bg-light-grayish-cyan-filter px-[9px] pb-[3px] pt-[5px] text-desaturated-dark-cyan"}>
                  {tool}
                </h4>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
