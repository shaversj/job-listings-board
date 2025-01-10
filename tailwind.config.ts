import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
      },
      colors: {
        "desaturated-dark-cyan": "hsl(180, 29%, 50%)",
        "light-green": "hsl(180, 29%, 95%)",
        "light-grayish-cyan-bg": "hsl(180, 52%, 96%)",
        "light-grayish-cyan-filter": "hsl(180, 31%, 95%)",
        "dark-grayish-cyan": "hsl(180, 8%, 52%)",
        "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
        "acqua-spring": "hsl(180, 52%, 96%)",
      },
      fontSize: {
        "new-featured": ["0.875rem", { fontWeight: "bold", lineHeight: "0.875rem", letterSpacing: "-0.11px" }],
        "heading-18px-bold": ["1.125rem", { fontWeight: "bold" }],
        "heading-13px-bold": ["0.8125rem", { fontWeight: "bold" }],
        "heading-22px-bold": ["1.375rem", { fontWeight: "bold", lineHeight: "1.5rem" }],
        "heading-15px-bold": ["0.9375rem", { fontWeight: "bold", lineHeight: "1.5rem" }],
        "subheading-18px-medium": ["1.125rem", { fontWeight: "500", lineHeight: "1.5rem", letterSpacing: "-0.14px" }],
        "subheading-16px-medium": ["1rem", { fontWeight: "500", lineHeight: "1.5rem", letterSpacing: "-0.12px" }],
        "body-16px-bold": ["1rem", { fontWeight: "bold", lineHeight: "1.5rem", letterSpacing: "-0.12px" }],
      },
      fontFamily: {
        spartan: ["var(--font-league-spartan)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
