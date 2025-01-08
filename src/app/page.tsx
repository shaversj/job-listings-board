"use client";

import Image from "next/image";
import { jobData } from "@/data/job-data";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";
import JobCategory from "@/components/JobCategory";
import type { Job, JobCategoryFilter } from "@/types/types";
import CategoryBadge from "@/components/CategoryBadge";

export default function Home() {
  const [jobCategoryFilter, setJobCategoryFilter] = useQueryStates({
    role: parseAsArrayOf(parseAsString, ","),
    level: parseAsArrayOf(parseAsString, ","),
    languages: parseAsArrayOf(parseAsString, ","),
    tools: parseAsArrayOf(parseAsString, ","),
  });

  const addJobCategoryFilter = (category: keyof JobCategoryFilter, value: string) => {
    setJobCategoryFilter((prev) => ({
      ...prev,
      [category]: prev[category]?.includes(value) ? prev[category] : [...(prev[category] || []), value],
    }));
  };

  const clearAllCategories = () => {
    setJobCategoryFilter({
      role: null,
      level: null,
      languages: null,
      tools: null,
    });
  };

  const clearValueInCategory = (category: string, value: string) => {
    setJobCategoryFilter((prev) => {
      const updatedCategory = prev[category as keyof JobCategoryFilter]?.filter((item) => item !== value);
      return {
        ...prev,
        [category as keyof JobCategoryFilter]: updatedCategory?.length ? updatedCategory : null,
      };
    });
  };

  const filteredJobs = jobData.filter((job) => {
    const noFilters = Object.values(jobCategoryFilter).every((filter) => !filter?.length);
    if (noFilters) return true;

    const roleMatch = (jobCategoryFilter.role ?? []).some((role) => job.role.includes(role));
    const levelMatch = (jobCategoryFilter.level ?? []).some((level) => job.level.includes(level));
    const languagesMatch = (jobCategoryFilter.languages ?? []).some((language) => job.languages.includes(language));
    const toolsMatch = (jobCategoryFilter.tools ?? []).some((tool) => job.tools.includes(tool));

    return roleMatch || levelMatch || languagesMatch || toolsMatch;
  });

  return (
    <div className={"bg-[#effafa]"}>
      <header className={"relative h-[156px] bg-[#5da5a5] bg-[url('/images/bg-header-desktop.svg')] bg-no-repeat"}>
        <div className={"shadow-custom-shadow absolute -bottom-9 left-1/2 flex h-[72px] w-[1110px] -translate-x-1/2 items-center gap-x-4 rounded-[5px] bg-white px-10 py-5"}>
          {Object.entries(jobCategoryFilter).map(([category, values]) => values?.map((value) => <CategoryBadge key={value} category={category} value={value} clearValueInCategory={clearValueInCategory} />))}
          <button onClick={() => clearAllCategories()} className={"text-body-16px-bold ml-auto text-dark-grayish-cyan hover:text-desaturated-dark-cyan hover:underline"}>
            Clear
          </button>
        </div>
      </header>
      <div className={"flex flex-col gap-y-[40px] px-6 pt-[76px] lg:gap-y-6 lg:px-[165px]"}>
        {filteredJobs.map((job: Job, index: number) => (
          <div key={index} className={`shadow-custom-shadow relative flex flex-col gap-x-6 rounded-[5px] bg-white px-6 pb-6 pt-8 lg:flex-row lg:items-center lg:px-10 lg:py-8 ${job.featured && "border-l-[5px] border-[#5CA5A5]"}`}>
            <Image className={"absolute top-0 size-[48px] -translate-y-[24px] lg:static lg:size-[88px]"} src={job.logo} alt="Company logo" width={88} height={88} />
            <div>
              <div className={"flex items-center gap-x-[30px] lg:gap-x-[15px]"}>
                <h2 className={"text-heading-13px-bold lg:text-heading-18px-bold text-desaturated-dark-cyan"}>{job.company}</h2>
                {job.new || job.featured ? (
                  <>
                    <div className={"flex gap-x-2"}>
                      {job.new && <h3 className={"text-new-featured h-[24px] w-[51px] rounded-[12px] bg-desaturated-dark-cyan px-2 pb-[3px] pt-[7px] align-text-top uppercase text-white"}>New!</h3>}
                      {job.featured && <h3 className={"text-new-featured h-[24px] w-[79px] rounded-[12px] bg-very-dark-grayish-cyan px-2 pb-[3px] pt-[7px] text-center uppercase text-white"}>Featured</h3>}
                    </div>
                  </>
                ) : null}
              </div>
              <div>
                <p className={"text-heading-15px-bold lg:text-heading-22px-bold pt-2.5"}>{job.position}</p>
                <div className={"text-subheading-16px-medium lg:text-subheading-18px-medium flex items-center gap-x-4 pt-[7px] text-dark-grayish-cyan"}>
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
            <div className={"mb-4 mt-[15px] h-[1px] bg-[#B7C4C4] lg:hidden"}></div>
            <div className={"ml-auto flex flex-wrap gap-x-4 gap-y-4 lg:inline-flex"}>
              {job.role && <JobCategory type={"role"} value={job.role} onClick={addJobCategoryFilter} />}
              {job.level && <JobCategory type={"level"} value={job.level} onClick={addJobCategoryFilter} />}
              {job.languages.length > 0 && job.languages.map((language) => <JobCategory key={language} type={"languages"} value={language} onClick={addJobCategoryFilter} />)}
              {job.tools.length > 0 && job.tools.map((tool) => <JobCategory key={tool} type={"tools"} value={tool} onClick={addJobCategoryFilter} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
