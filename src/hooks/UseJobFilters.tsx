"use client";

import { useQueryStates } from "nuqs";
import { parseAsArrayOf, parseAsString } from "nuqs";
import type { Job, JobCategoryFilter } from "@/types/types";

type useJobFiltersProps = {
  jobData: Job[];
};

export default function useJobFilters({ jobData }: useJobFiltersProps) {
  const [jobCategoryFilter, setJobCategoryFilter] = useQueryStates({
    role: parseAsArrayOf(parseAsString, ","),
    level: parseAsArrayOf(parseAsString, ","),
    languages: parseAsArrayOf(parseAsString, ","),
    tools: parseAsArrayOf(parseAsString, ","),
  });

  const hasFilters = Object.values(jobCategoryFilter).some((filter) => filter?.length);

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

  return {
    jobCategoryFilter,
    hasFilters,
    addJobCategoryFilter,
    clearAllCategories,
    clearValueInCategory,
    filteredJobs,
  };
}
