import type { JobCategoryFilter } from "@/types/types";

interface JobCategoryProps {
  type: keyof JobCategoryFilter;
  value: string;
  onClick: (type: keyof JobCategoryFilter, value: string) => void;
}

export default function JobCategory({ type, value, onClick }: JobCategoryProps) {
  return (
    <button onClick={() => onClick(type, value)} className={"text-body-16px-bold inline rounded-s-full bg-light-grayish-cyan-filter px-[9px] pb-[3px] pt-[5px] text-desaturated-dark-cyan hover:bg-desaturated-dark-cyan hover:text-white"}>
      {value}
    </button>
  );
}
