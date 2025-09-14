import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evolution Stables",
  description: "Premium horse stables and equestrian facilities",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">{children}</body>
    </html>
  );
}
