import React from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  children?: React.ReactNode;
  className?: string;
  height?: "screen" | "80vh" | "90vh";
  overlay?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  children,
  className,
  height = "80vh",
  overlay = false,
}) => {
  const heightClasses = {
    screen: "h-screen",
    "80vh": "h-screen-80",
    "90vh": "h-screen-90",
  };

  return (
    <section
      className={cn("relative w-full flex items-center", heightClasses[height], className)}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {overlay && <div className="absolute inset-0 bg-black/50" />}

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bw-gradual text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-gray max-w-2xl mx-auto mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};
