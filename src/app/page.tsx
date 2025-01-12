"use client";

import { Suspense } from "react";
import JobBoard from "@/components/JobBoard";

export default function Home() {
  return (
    <Suspense>
      <JobBoard />
    </Suspense>
  );
}
