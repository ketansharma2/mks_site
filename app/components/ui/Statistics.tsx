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
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        setHasAnimated(true);

        stats.forEach((stat, index) => {
          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(stat.number * easedProgress);

            setCounters((prev) => {
              const updated = [...prev];
              updated[index] = value;
              return updated;
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A4266] py-14 sm:py-16 md:py-20"
    >
      {/* Soft background variation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A4266] via-[#0E527C] to-[#0A4266]" />

      {/* Subtle borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                group relative px-4 py-5 text-center
                sm:px-6 md:py-2 lg:px-8
                ${index !== 0 ? "border-l border-white/20" : ""}
              `}
            >
              <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
                {counters[index]}
                <span className="ml-1 text-[#5DD5DE]">
                  {stat.suffix}
                </span>
              </div>

              <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/75 sm:text-xs">
                {stat.label}
              </div>

              <div className="mx-auto mt-4 h-px w-7 bg-[#5DD5DE] transition-all duration-300 group-hover:w-11" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}