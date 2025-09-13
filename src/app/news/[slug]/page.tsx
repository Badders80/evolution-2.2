'use client';

import Section from '@/components/Section';
import { useParams } from 'next/navigation';

/**
 * Dynamic news article page.  
 * In a future iteration this will fetch article data based on the slug.
 */
export default function NewsArticle() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params?.slug[0] : (params?.slug as string);
  return (
    <Section>
      <h1 className="text-3xl font-bw-gradual capitalize mb-4">{slug?.replace(/-/g, ' ')}</h1>
      <p className="text-gray">Article content coming soon.</p>
    </Section>
  );
}