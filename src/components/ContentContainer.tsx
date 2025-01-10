type ContentContainerProps = {
  children: React.ReactNode;
};

export default function ContentContainer({ children }: ContentContainerProps) {
  return <div className={"relative flex flex-col gap-y-[40px] px-6 lg:gap-y-6 lg:px-[165px]"}>{children}</div>;
}
