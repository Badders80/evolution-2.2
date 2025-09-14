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
      <body className="bg-background text-foreground font-ibm-plex scroll-smooth">{children}</body>
    </html>
  );
}
