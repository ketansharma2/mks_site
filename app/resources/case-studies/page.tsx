import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { caseStudies } from "@/app/data/caseStudies";

export const metadata = {
  title: "Case Studies | MKS Industrial Solutions",
  description:
    "Explore MKS Industrial Solutions case studies covering industrial water treatment, evaporation, ZLD, energy efficiency and process engineering projects.",
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-slate-700">
      {/* HERO */}
      <section className="bg-[#062B49]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5DD5DE]">
              MKS Projects
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
              Project{" "}
              <span className="text-[#5DD5DE]">Case Studies</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Explore selected MKS Industrial Solutions projects,
              engineering challenges, implemented solutions and
              project outcomes across industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#27B3C2]">
              Engineering Projects
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#062B49] md:text-3xl">
              Our Case Studies
            </h2>
          </div>

          {caseStudies.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">
              <h3 className="text-xl font-bold text-[#062B49]">
                Case Studies Coming Soon
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Detailed project case studies and engineering
                outcomes will be published here soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.slug}
                  caseStudy={caseStudy}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function CaseStudyCard({
  caseStudy,
}: {
  caseStudy: (typeof caseStudies)[number];
}) {
  return (
    <Link
      href={`/resources/case-studies/${caseStudy.slug}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#27B3C2]">
          {caseStudy.category}
        </p>

        <h3 className="mt-3 text-xl font-bold leading-tight text-[#062B49]">
          {caseStudy.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {caseStudy.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
          <CalendarDays className="h-4 w-4" />
          {caseStudy.date}
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#062B49]">
          View Case Study
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}