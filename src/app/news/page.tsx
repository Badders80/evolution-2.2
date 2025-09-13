import Link from "next/link";
import { Section } from "@/components/ui/section";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
}

// Placeholder articles until a CMS is integrated.
const articles: Article[] = [
  {
    slug: "evolution-2-2-launch",
    title: "Evolution 2.2 Launches with New Features",
    excerpt:
      "Discover what's new in Evolution 2.2 including a fresh design system and Auth0 integration.",
  },
  {
    slug: "fractional-ownership-trends",
    title: "The Rise of Fractional Horse Ownership",
    excerpt:
      "How tokenisation is transforming the way people invest in thoroughbreds around the world.",
  },
];

/**
 * News listing page. Displays a list of articles with links to dynamic pages.
 */
export default function News() {
  return (
    <Section>
      <h1 className="text-3xl font-bw-gradual mb-4">News</h1>
      <ul className="space-y-6">
        {articles.map(article => (
          <li key={article.slug} className="border-b border-gray pb-4">
            <Link
              href={`/news/${article.slug}`}
              className="text-2xl font-bw-gradual text-gold hover:underline"
            >
              {article.title}
            </Link>
            <p className="text-gray mt-1">{article.excerpt}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
