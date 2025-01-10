import CategoryBadge from "@/components/CategoryBadge";
import { JobCategoryFilter } from "@/types/types";

type FilterPanelProps = {
  jobCategoryFilter: JobCategoryFilter;
  hasFilters: boolean;
  clearValueInCategory: (category: string, value: string) => void;
  clearAllCategories: () => void;
};
export default function FilterPanel({ jobCategoryFilter, hasFilters, clearValueInCategory, clearAllCategories }: FilterPanelProps) {
  return (
    <div className={`shadow-custom-shadow relative -translate-y-[calc(100%/2)] items-center justify-center gap-x-4 gap-y-4 rounded-[5px] bg-white px-4 py-5 lg:px-10 ${hasFilters ? "flex" : "hidden"}`}>
      <div className={"flex flex-wrap gap-x-4 gap-y-4"}>
        {Object.entries(jobCategoryFilter).map(([category, values]) => values?.map((value: string) => <CategoryBadge key={value} category={category as keyof JobCategoryFilter} value={value} clearValueInCategory={clearValueInCategory} />))}
      </div>
      <button onClick={() => clearAllCategories()} className={"text-body-16px-bold ml-auto text-dark-grayish-cyan hover:text-desaturated-dark-cyan hover:underline"}>
        Clear
      </button>
    </div>
  );
}
