"use client";

import {
  ArrowRight,
  ClipboardCheck,
  Search,
  Calculator,
} from "lucide-react";
import Link from "next/link";

const intelligenceTools = [
  {
    title: "Plant Assessment",
    description:
      "Assess your plant requirements, challenges and objectives.",
    icon: ClipboardCheck,
    href: "/mks-intelligence/plant-assessment",
  },
  {
    title: "Solution Finder",
    description:
      "Find suitable MKS solutions based on your process requirements.",
    icon: Search,
    href: "/mks-intelligence/solution-finder",
  },
  {
    title: "Industrial Calculator",
    description:
      "Perform preliminary water, energy, capacity and project calculations.",
    icon: Calculator,
    href: "/mks-intelligence/industrial-calculator",
  },
];

export default function MKSIntelligencePage() {
  return (
    <main className="bg-white text-slate-700">

      {/* HERO */}
      <section className="bg-[#062B49]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
              MKS Intelligence
            </p>

            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Smart Tools for{" "}
              <span className="text-[#5DD5DE]">
                Industrial Decisions
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
              Practical tools to assess your plant, identify
              suitable solutions and perform preliminary
              industrial calculations.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="bg-slate-50 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#27B3C2]">
              Intelligence Tools
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#062B49] md:text-3xl">
              Explore MKS Tools
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {intelligenceTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#27B3C2] hover:shadow-md"
                >
                  {/* ICON */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#062B49]/5 transition group-hover:bg-[#062B49]">
                    <Icon className="h-5 w-5 text-[#062B49] transition group-hover:text-[#5DD5DE]" />
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-5 text-lg font-bold text-[#062B49]">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {tool.description}
                  </p>

                  {/* LINK */}
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#062B49]">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}

          </div>
        </div>
      </section>

    </main>
  );
}