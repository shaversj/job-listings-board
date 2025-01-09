type CategoryBadgeProps = {
  category: string;
  value: string;
  clearValueInCategory: (category: string, value: string) => void;
};

export default function CategoryBadge({ category, clearValueInCategory, value }: CategoryBadgeProps) {
  return (
    <div className={"flex"}>
      <div className={"text-body-16px-bold inline rounded-s bg-light-grayish-cyan-filter px-[9px] pb-[3px] pt-[5px] text-desaturated-dark-cyan"}>{value}</div>
      <button onClick={() => clearValueInCategory(category, value)}>
        <svg className={"group"} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={"fill-[#5CA5A5] group-hover:fill-[#2B3939]"} d="M0 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H0V0Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.435 11.1213L20.3137 9L15.7175 13.5962L11.1213 9L9 11.1213L13.5962 15.7175L9 20.3137L11.1213 22.435L15.7175 17.8388L20.3137 22.435L22.435 20.3137L17.8388 15.7175L22.435 11.1213Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
