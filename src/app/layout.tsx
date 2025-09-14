import "./globals.css";
import "@fontsource/ibm-plex-sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evolution Stables",
  description: "Premium horse stables and equestrian facilities",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bw+Gradual:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-ibm-plex scroll-smooth">{children}</body>
    </html>
  );
}
