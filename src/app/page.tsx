"use client";

import type { Job } from "@/types/types";
import { jobData } from "@/data/job-data";
import useJobFilters from "@/hooks/UseJobFilters";
import JobCard from "@/components/JobCard";
import FilterPanel from "@/components/FilterPanel";
import JobsContainer from "@/components/JobsContainer";
import ContentContainer from "@/components/ContentContainer";
import Header from "@/components/Header";

export default function Home() {
  const { jobCategoryFilter, hasFilters, addJobCategoryFilter, clearValueInCategory, clearAllCategories, filteredJobs } = useJobFilters({ jobData });

  return (
    <main className={"bg-acqua-spring min-h-screen"}>
      <Header />
      <ContentContainer>
        {hasFilters && <FilterPanel jobCategoryFilter={jobCategoryFilter} hasFilters={hasFilters} clearValueInCategory={clearValueInCategory} clearAllCategories={clearAllCategories} />}
        <JobsContainer hasFilters={hasFilters}>
          {filteredJobs.map((job: Job, index: number) => (
            <JobCard key={index} job={job} index={index} addJobCategoryFilter={addJobCategoryFilter} />
          ))}
        </JobsContainer>
      </ContentContainer>
    </main>
  );
}
