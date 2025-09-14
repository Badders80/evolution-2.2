import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "gray" | "gold";
  size?: "sm" | "md" | "lg";
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className,
  containerClassName,
  id,
  background = "default",
  size = "md",
}) => {
  const backgroundClasses = {
    default: "bg-black",
    gray: "bg-gray",
    gold: "bg-gold",
  };

  const sizeClasses = {
    sm: "py-16 md:py-20",
    md: "py-20 md:py-28 lg:py-32",
    lg: "py-24 md:py-32 lg:py-40",
  };

  return (
    <section
      id={id}
      className={cn("w-full", backgroundClasses[background], sizeClasses[size], className)}
    >
      <div className={cn("container", containerClassName)}>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bw-gradual text-gold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
