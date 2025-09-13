"use client";

import { Section } from "@/components/ui/section";
import { useParams } from "next/navigation";

/**
 * Dynamic event detail page.
 * In a future iteration this will fetch event data based on the slug.
 */
export default function EventDetail() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params?.slug[0] : (params?.slug as string);
  return (
    <Section>
      <h1 className="text-3xl font-bw-gradual capitalize mb-4">{slug?.replace(/-/g, " ")}</h1>
      <p className="text-gray">Event details will be available soon.</p>
    </Section>
  );
}
