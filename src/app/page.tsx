import Image from "next/image";
import { jobData } from "@/data/job-data";

export default function Home() {
  // const job = jobData[0];
  return (
    <div className={"bg-[#effafa]"}>
      <header className={"relative h-[156px] bg-[#5da5a5] bg-[url('/images/bg-header-desktop.svg')] bg-no-repeat"}>
        <div className={"shadow-custom-shadow absolute -bottom-9 left-1/2 flex h-[72px] w-[1110px] -translate-x-1/2 items-center rounded-[5px] bg-white px-10 py-5"}>
          <div className={"flex"}>
            <h4 className={"text-body-16px-bold inline bg-light-grayish-cyan-filter px-[9px] pb-[3px] pt-[5px] text-desaturated-dark-cyan"}>Featured</h4>
            <svg className={"group"} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={"fill-[#5CA5A5] group-hover:fill-[#2B3939]"} d="M0 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H0V0Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.435 11.1213L20.3137 9L15.7175 13.5962L11.1213 9L9 11.1213L13.5962 15.7175L9 20.3137L11.1213 22.435L15.7175 17.8388L20.3137 22.435L22.435 20.3137L17.8388 15.7175L22.435 11.1213Z"
                fill="white"
              />
            </svg>
          </div>
          <p className={"text-body-16px-bold ml-auto text-dark-grayish-cyan hover:text-desaturated-dark-cyan hover:underline"}>Clear</p>
        </div>
      </header>
      <div className={"flex flex-col gap-y-6 px-[165px] pt-[76px]"}>
        {jobData.map((job, index) => (
          <div key={index} className={"shadow-custom-shadow flex items-center gap-x-6 rounded-[5px] bg-white px-10 py-8"}>
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
    </div>
  );
}
