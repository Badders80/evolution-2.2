import React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";

interface EventItem {
  slug: string;
  title: string;
  date: string;
}

// Placeholder events until a CMS is integrated.
const events: EventItem[] = [
  {
    slug: "webinar-fractional-investing",
    title: "Webinar: Fractional Horse Investing 101",
    date: "2025-10-01",
  },
  {
    slug: "race-day-auckland",
    title: "Race Day at Ellerslie",
    date: "2025-11-15",
  },
];

/**
 * Events listing page. Displays a list of upcoming events with links to detail pages.
 */
export default function Events() {
  return (
    <Section>
      <h1 className="text-3xl font-bw-gradual mb-4">Events</h1>
      <ul className="space-y-6">
        {events.map(event => (
          <li key={event.slug} className="border-b border-gray pb-4">
            <Link
              href={`/events/${event.slug}`}
              className="text-2xl font-bw-gradual text-gold hover:underline"
            >
              {event.title}
            </Link>
            <p className="text-gray mt-1">{event.date}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
