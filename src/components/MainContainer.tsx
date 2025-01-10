type ContentContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: ContentContainerProps) {
  return <main className={"relative flex flex-col gap-y-[40px] px-6 lg:gap-y-6 lg:px-[165px]"}>{children}</main>;
}
