import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import FilterPanel from "@/components/FilterPanel";
import JobsContainer from "@/components/JobsContainer";
import type { Job } from "@/types/types";
import JobCard from "@/components/JobCard";
import useJobFilters from "@/hooks/UseJobFilters";
import { jobData } from "@/data/job-data";

export default function JobBoard() {
  const { jobCategoryFilter, hasFilters, addJobCategoryFilter, clearValueInCategory, clearAllCategories, filteredJobs } = useJobFilters({ jobData });

  return (
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
  );
}
