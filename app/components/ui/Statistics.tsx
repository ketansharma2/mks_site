// components/Statistics.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 15, label: "Years of Experience", suffix: "+" },
  { number: 95, label: "Successful Projects", suffix: "+" },
  { number: 12, label: "Industries Served", suffix: "+" },
  { number: 100, label: "End-to-End Engineering", suffix: "%" },
];

export default function Statistics() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(start);
                return newCounters;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-blue-600 py-12 md:py-16 lg:py-20 border-t border-blue-500/30"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                index < stats.length - 1
                  ? "border-r border-white/20 last:border-r-0"
                  : ""
              } ${
                index === 1 ? "border-r border-white/20" : ""
              } md:border-r md:border-white/20 last:md:border-r-0`}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {counters[index]}
                {stat.suffix}
              </div>
              <div className="text-white/80 text-xs md:text-sm uppercase tracking-wider mt-1 md:mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}