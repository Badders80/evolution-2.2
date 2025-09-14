"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className={cn("relative h-screen w-screen flex items-center justify-center")}
      style={{
        backgroundImage: "url('/assets/Horse-Double-Black.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      role="region"
      aria-label="Hero section with Evolution Stables branding"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <Image
        src="/assets/ES-Branded-Gold.png"
        alt="Evolution Stables branded logo"
        width={600}
        height={400}
        className="relative z-10 w-[60%] max-w-[600px] h-auto drop-shadow-lg"
      />
    </section>
  );
}
