import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "./globals.css";
import { Suspense } from "react";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Job Listings Board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense>
        <NuqsAdapter>
          <body className={`${leagueSpartan.variable} font-spartan antialiased`}>{children}</body>
        </NuqsAdapter>
      </Suspense>
    </html>
  );
}
