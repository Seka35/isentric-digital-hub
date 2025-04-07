
import React, { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove("opacity-0");
              
              if (animation === "fade-in") {
                entry.target.classList.add("animate-fade-in");
              } else if (animation === "slide-in-left") {
                entry.target.classList.add("animate-slide-in-left");
              } else if (animation === "slide-in-right") {
                entry.target.classList.add("animate-slide-in-right");
              }
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animation, delay]);

  return (
    <div
      ref={sectionRef}
      className={`opacity-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
