type JobsContainerProps = {
  children: React.ReactNode;
  hasFilters: boolean;
};

export default function JobsContainer({ children, hasFilters }: JobsContainerProps) {
  return <div className={`flex flex-col gap-y-[40px] lg:gap-y-6 ${hasFilters ? "-mt-[19px]" : "pt-[56px]"}`}>{children}</div>;
}
