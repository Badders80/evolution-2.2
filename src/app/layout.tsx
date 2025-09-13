import '@/app/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UserProvider } from '@auth0/nextjs-auth0';

/**
 * Default metadata for the application.  
 * Titles and descriptions can be overridden in individual pages via
 * the generateMetadata function export.
 */
export const metadata: Metadata = {
  title: {
    default: 'Evolution Stables',
    template: '%s | Evolution Stables',
  },
  description: 'A premium platform for fractional horse ownership and investment.',
  metadataBase: new URL('https://evolution-2-2.vercel.app'),
  openGraph: {
    title: 'Evolution Stables',
    description:
      'Join the evolution of fractional horse ownership with our cutting-edge platform.',
    type: 'website',
    url: 'https://evolution-2-2.vercel.app',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Evolution Stables',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolution Stables',
    description:
      'Join the evolution of fractional horse ownership with our cutting-edge platform.',
    images: ['/assets/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Header />
      </body>
    </html>
  );
}