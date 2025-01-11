"use client";

import { Suspense } from "react";
import JobClient from "@/components/Client";

export default function Home() {
  return (
    <Suspense>
      <JobClient />
    </Suspense>
  );
}
