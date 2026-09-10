import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Building2,
    Factory,
} from "lucide-react";

import { caseStudies } from "@/app/data/caseStudies";

type CaseStudyPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

/* -------------------------------------------------------
   Static Case Study Routes
------------------------------------------------------- */

export function generateStaticParams() {
    return caseStudies.map((caseStudy) => ({
        slug: caseStudy.slug,
    }));
}

/* -------------------------------------------------------
   Dynamic SEO Metadata
------------------------------------------------------- */

export async function generateMetadata({
    params,
}: CaseStudyPageProps): Promise<Metadata> {
    const { slug } = await params;

    const caseStudy = caseStudies.find(
        (item) => item.slug === slug
    );

    if (!caseStudy) {
        return {
            title: "Case Study Not Found | MKS Industrial Solutions",
        };
    }

    return {
        title: `${caseStudy.title} | MKS Industrial Solutions`,

        description: caseStudy.description,

        keywords: [
            caseStudy.title,
            caseStudy.category,
            "MKS Industrial Solutions",
            "industrial engineering",
            "process engineering",
            "industrial solutions",
        ],

        alternates: {
            canonical: `/resources/case-studies/${caseStudy.slug}`,
        },

        openGraph: {
            title: caseStudy.title,
            description: caseStudy.description,
            type: "article",
            publishedTime: caseStudy.date,
            images: [
                {
                    url: caseStudy.image,
                    alt: caseStudy.title,
                },
            ],
        },
    };
}

/* -------------------------------------------------------
   Page
------------------------------------------------------- */

export default async function CaseStudyPage({
    params,
}: CaseStudyPageProps) {
    const { slug } = await params;

    const caseStudy = caseStudies.find(
        (item) => item.slug === slug
    );

    if (!caseStudy) {
        notFound();
    }

    /* -------------------------------------------------------
       Related Case Studies
    ------------------------------------------------------- */

    const relatedCaseStudies = caseStudies
        .filter(
            (item) =>
                item.slug !== caseStudy.slug &&
                item.category === caseStudy.category
        )
        .slice(0, 3);

    /* -------------------------------------------------------
       Case Study Schema
    ------------------------------------------------------- */

    const caseStudySchema = {
        "@context": "https://schema.org",
        "@type": "Article",

        headline: caseStudy.title,

        description: caseStudy.description,

        image: caseStudy.image,

        datePublished: caseStudy.date,

        author: {
            "@type": "Organization",
            name: "MKS Industrial Solutions",
        },

        publisher: {
            "@type": "Organization",
            name: "MKS Industrial Solutions",
        },

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `/resources/case-studies/${caseStudy.slug}`,
        },
    };

    return (
        <main className="bg-white text-slate-700">

            {/* ---------------------------------------------------
          HERO
      --------------------------------------------------- */}

            <section className="bg-[#062B49]">
                <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 md:py-28 lg:px-8">

                    <Link
                        href="/resources/case-studies"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#5DD5DE]  transition hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Case Studies
                    </Link>

                    <div className="mt-8">

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5DD5DE]">
                            {caseStudy.category}
                        </p>

                        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
                            {caseStudy.title}
                        </h1>

                        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
                            {caseStudy.description}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-white/50 sm:text-sm">

                            <span className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />
                                {caseStudy.date}
                            </span>

                            <span className="flex items-center gap-2">
                                <Factory className="h-4 w-4" />
                                Industrial Project
                            </span>

                            <span>
                                MKS Industrial Solutions
                            </span>

                        </div>

                    </div>
                </div>
            </section>

            {/* ---------------------------------------------------
          CASE STUDY CONTENT
      --------------------------------------------------- */}

            <article className="px-5 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="mx-auto max-w-4xl">

                    {/* Featured Image */}

                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Project Information */}

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                            <div className="flex items-center gap-3">
                                <Building2 className="h-5 w-5 text-[#27B3C2]" />

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                        Industry
                                    </p>

                                    <p className="mt-1 font-semibold text-[#062B49]">
                                        {caseStudy.category}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                            <div className="flex items-center gap-3">
                                <Factory className="h-5 w-5 text-[#27B3C2]" />

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                        Project Type
                                    </p>

                                    <p className="mt-1 font-semibold text-[#062B49]">
                                        Industrial Engineering
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Case Study Body */}

                    <div className="mt-10 space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold leading-tight text-[#062B49] md:text-3xl">
                                Project Overview
                            </h2>

                            <p className="mt-4 text-base leading-8 text-slate-600">
                                {caseStudy.overview}
                            </p>
                        </section>

                        {/* Challenge */}
                        <section>
                            <h2 className="text-2xl font-bold leading-tight text-[#062B49] md:text-3xl">
                                Engineering Challenge
                            </h2>

                            <ul className="mt-5 space-y-3">
                                {caseStudy.challenge.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-base leading-7 text-slate-600"
                                    >
                                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#27B3C2]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Solution */}
                        <section>
                            <h2 className="text-2xl font-bold leading-tight text-[#062B49] md:text-3xl">
                                MKS Solution
                            </h2>

                            <ul className="mt-5 space-y-3">
                                {caseStudy.solution.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-base leading-7 text-slate-600"
                                    >
                                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#27B3C2]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Outcome */}
                        <section>
                            <h2 className="text-2xl font-bold leading-tight text-[#062B49] md:text-3xl">
                                Project Outcome
                            </h2>

                            <ul className="mt-5 space-y-3">
                                {caseStudy.outcome.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-base leading-7 text-slate-600"
                                    >
                                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#27B3C2]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>
                    {/* ------------------------------------------------
              CTA
          ------------------------------------------------ */}

                    <div className="mt-14 rounded-2xl bg-[#062B49] p-7 sm:p-10">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5DD5DE]">
                            MKS Engineering
                        </p>

                        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                            Have a Similar Project Requirement?
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                            Discuss your industrial process, water treatment,
                            evaporation, ZLD or plant optimization requirements
                            with MKS Industrial Solutions.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">

                            <Link
                                href="/plant-assessment"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#27B3C2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5DD5DE]"
                            >
                                Assess Your Plant

                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                Contact MKS
                            </Link>

                        </div>
                    </div>

                </div>
            </article>

            {/* ---------------------------------------------------
          RELATED CASE STUDIES
      --------------------------------------------------- */}

            {relatedCaseStudies.length > 0 && (
                <section className="border-t border-slate-200 bg-slate-50 px-5 py-14 sm:px-6 md:py-20 lg:px-8">

                    <div className="mx-auto max-w-7xl">

                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#27B3C2]">
                            More Projects
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-[#062B49] md:text-3xl">
                            Related Case Studies
                        </h2>

                        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                            {relatedCaseStudies.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/resources/case-studies/${related.slug}`}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >

                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#27B3C2]">
                                        {related.category}
                                    </p>

                                    <h3 className="mt-3 text-lg font-bold leading-tight text-[#062B49]">
                                        {related.title}
                                    </h3>

                                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                                        {related.description}
                                    </p>

                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#062B49]">
                                        View Case Study

                                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                    </span>

                                </Link>
                            ))}

                        </div>
                    </div>

                </section>
            )}

            {/* ---------------------------------------------------
          JSON-LD
      --------------------------------------------------- */}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(caseStudySchema),
                }}
            />

        </main>
    );
}