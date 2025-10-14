"use client";

import dynamic from "next/dynamic";

const DynamicInterestsShowcase = dynamic(
  () => import("../../components/3DSlideShow"),
  {
    ssr: false,
    loading: () => (
      <div aria-busy="true" className="interests-showcase-fallback">
        Loading interactive showcase…
      </div>
    ),
  }
);

export default function InterestsShowcaseClient() {
  return <DynamicInterestsShowcase />;
}
