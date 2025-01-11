"use client";

import type { Job } from "@/types/types";
import { jobData } from "@/data/job-data";
import useJobFilters from "@/hooks/UseJobFilters";
import JobCard from "@/components/JobCard";
import FilterPanel from "@/components/FilterPanel";
import JobsContainer from "@/components/JobsContainer";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function Home() {
  const { jobCategoryFilter, hasFilters, addJobCategoryFilter, clearValueInCategory, clearAllCategories, filteredJobs } = useJobFilters({ jobData });

  return (
    <Suspense>
      <div className={"bg-acqua-spring min-h-screen"}>
        <Header />
        <MainContainer>
          {hasFilters && <FilterPanel jobCategoryFilter={jobCategoryFilter} hasFilters={hasFilters} clearValueInCategory={clearValueInCategory} clearAllCategories={clearAllCategories} />}
          <JobsContainer hasFilters={hasFilters}>
            {filteredJobs.map((job: Job, index: number) => (
              <JobCard key={index} job={job} index={index} addJobCategoryFilter={addJobCategoryFilter} />
            ))}
          </JobsContainer>
        </MainContainer>
      </div>
    </Suspense>
  );
}
