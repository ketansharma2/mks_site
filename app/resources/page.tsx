"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowRight, ArrowUpRight, BookOpen, Download, FileText, HelpCircle, ChevronDown
} from "lucide-react";


const resources = [
    {
        type: "Case Study",
        title: "Zero Liquid Discharge Plant for Chemical Industry",
        description:
            "A customized ZLD solution designed to recover water, reduce waste, and improve overall process efficiency.",
        category: "case-study",
        image: "/images/resource/case-study/zld-case-study.png",
    },
    {
        type: "Article",
        title: "Understanding MVR Evaporation Technology",
        description:
            "An overview of mechanical vapor recompression and its role in reducing energy consumption.",
        category: "article",
        image: "/images/resource/article/mvr-article.png",
    },
    {
        type: "Blog",
        title: "How Industries Can Improve Water Recovery",
        description:
            "Practical considerations for improving water recovery and minimizing industrial wastewater.",
        category: "blog",
        image: "/images/resource/blogs/water-blog.png",
    },
    {
        type: "Case Study",
        title: "MVR Evaporator System",
        description:
            "Engineering and implementation of an energy-efficient MVR evaporation system for industrial applications.",
        category: "case-study",
        image: "/images/resource//case-study/mvr.png",
    },
    {
        type: "Article",
        title: "Choosing the Right Evaporation System",
        description:
            "Key technical factors to consider when selecting an evaporation solution for your process.",
        category: "article",
        image: "/images/resource/article/evaporator.png",
    },
    {
        type: "Blog",
        title: "The Role of Energy Audits in Industrial Plants",
        description:
            "How process and utility audits can identify opportunities for energy and operational improvements.",
        category: "blog",
        image: "/images/resource/blogs/energy.png",
    },
];



export default function ResourcesPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredResources =
        activeCategory === "all"
            ? resources
            : resources.filter((item) => item.category === activeCategory);

    return (
        <main className="bg-white text-[#062B49]">

            {/* =====================================================
          HERO
      ===================================================== */}
            <section className="relative overflow-hidden bg-[#062B49]">
                <div className="absolute inset-0">
                    <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#27B3C2]/10 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#0A4266] blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
                    <div className="max-w-4xl">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#27B3C2]" />

                            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5DD5DE]">
                                MKS Resource Center
                            </span>
                        </div>

                        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                            Knowledge That Drives
                            <span className="block text-[#5DD5DE]">
                                Better Industrial Decisions.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                            Explore technical articles, project case studies, brochures,
                            FAQs and industry insights from MKS Industrial Solutions.
                        </p>
                    </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#27B3C2] to-[#5DD5DE]" />
            </section>


            {/* =====================================================
          FEATURED RESOURCE
      ===================================================== */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="mb-10 flex items-end justify-between gap-6">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#27B3C2]">
                            Featured Resource
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            Engineering solutions in action
                        </h2>
                    </div>
                </div>

                <div className="group grid overflow-hidden rounded-3xl bg-[#062B49] lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative min-h-[360px] overflow-hidden">
                        <img
                            src="/images/resource/case-study/zld-case-study.png"
                            alt="MKS industrial project"
                            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-[#062B49]/30" />

                        <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#062B49]">
                            Case Study
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
                            Chemical Industry
                        </p>

                        <h3 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-4xl">
                            Zero Liquid Discharge Plant for Chemical Industry
                        </h3>

                        <p className="mt-6 leading-7 text-white/65">
                            Discover how MKS engineered a customized water and wastewater
                            treatment solution focused on water recovery, waste reduction,
                            and sustainable plant operations.
                        </p>

                        <Link
                            href="/resources/case-studies/zld-plant-chemical-industry"
                            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#27B3C2] px-6 py-3.5 text-sm font-semibold text-[#062B49] transition hover:bg-[#5DD5DE]"
                        >
                            Read Case Study
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* =====================================================
          RESOURCE GRID
      ===================================================== */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mb-12">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#27B3C2]">
                            Explore
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                            Resources & Insights
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredResources.map((resource, index) => (
                            <article
                                key={`${resource.title}-${index}`}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#27B3C2]/40 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={resource.image}
                                        alt={resource.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#062B49]/60 to-transparent opacity-70" />

                                    <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#062B49]">
                                        {resource.type}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold leading-snug text-[#062B49]">
                                        {resource.title}
                                    </h3>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                                        {resource.description}
                                    </p>

                                    <Link
                                        href="#"
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0A4266] transition group-hover:text-[#27B3C2]"
                                    >
                                        Explore Resource
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
          BROCHURES
      ===================================================== */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28" id="brochures">
                <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                    <div>
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#27B3C2]/10">
                            <BookOpen className="h-7 w-7 text-[#27B3C2]" />
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#27B3C2]">
                            Technical Resources
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                            Detailed information for your next project.
                        </h2>

                        <p className="mt-5 max-w-lg leading-7 text-slate-500">
                            Access our technical brochures to understand MKS technologies,
                            capabilities and industrial solutions in greater detail.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">

                        {[
                            "Water & Wastewater Treatment",
                            "Evaporation Systems",
                            "MVR Evaporators",
                            "Caustic Recovery Plants",
                        ].map((brochure) => (
                            <div
                                key={brochure}
                                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#27B3C2] hover:shadow-lg"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                                        <FileText className="h-5 w-5 text-[#0A4266]" />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-[#062B49]">
                                            {brochure}
                                        </p>

                                        <span className="text-xs text-slate-400">
                                            Technical Brochure · PDF
                                        </span>
                                    </div>
                                </div>

                                <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#062B49] text-white transition group-hover:bg-[#27B3C2] group-hover:text-[#062B49]">
                                    <Download className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
    FAQ
===================================================== */}
            <section className="bg-[#062B49] py-20 lg:py-28" id="faqs">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

                        {/* Left Content */}
                        <div>
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#27B3C2]/15">
                                <HelpCircle className="h-7 w-7 text-[#5DD5DE]" />
                            </div>

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
                                FAQ
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
                                Have questions?
                                <span className="block text-[#5DD5DE]">
                                    We have answers.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-md text-base leading-7 text-white/60">
                                Find answers to common questions about our industrial
                                technologies, services and project approach.
                            </p>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="divide-y divide-white/10 border-y border-white/10">
                            {[
                                {
                                    question: "What industries does MKS serve?",
                                    answer:
                                        "MKS provides industrial engineering and process solutions for industries including food and beverage, sugar, starch, distillery, chemical, dairy, textile and wastewater treatment.",
                                },
                                {
                                    question: "What information is required to start a project?",
                                    answer:
                                        "We typically require details such as process requirements, feed characteristics, capacity, operating conditions, utility availability and the desired project outcome.",
                                },
                                {
                                    question: "How does an MVR evaporator reduce energy consumption?",
                                    answer:
                                        "An MVR evaporator mechanically compresses and reuses the generated vapor as a heating medium, significantly reducing the requirement for fresh steam compared with conventional evaporation systems.",
                                },
                                {
                                    question: "Does MKS provide customized industrial solutions?",
                                    answer:
                                        "Yes. MKS develops process and equipment solutions based on the specific requirements, operating conditions and objectives of each industrial application.",
                                },
                                {
                                    question: "Can MKS provide project consultancy and feasibility studies?",
                                    answer:
                                        "Yes. MKS provides project consultancy, feasibility studies, engineering services and energy or utility audits to help evaluate and optimize industrial projects.",
                                },
                            ].map((faq) => (
                                <details
                                    key={faq.question}
                                    className="group"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-white transition-colors duration-200 hover:text-[#5DD5DE] [&::-webkit-details-marker]:hidden">
                                        <span className="text-base font-medium leading-6 md:text-lg">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            className="h-5 w-5 shrink-0 text-[#5DD5DE] transition-transform duration-300 group-open:rotate-180"
                                        />
                                    </summary>

                                    <div className="pb-6 pr-10">
                                        <p className="max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================
    CTA
===================================================== */}

            <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-24">

                <div className="absolute left-0 top-0 h-full w-1 bg-[#27B3C2]" />

                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

                    <div className="flex justify-center">
                        <span className="rounded-full bg-[#27B3C2]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#0A4266]">
                            Talk to MKS
                        </span>
                    </div>

                    <h2 className="mt-6 text-3xl font-bold leading-tight text-[#062B49] sm:text-4xl lg:text-5xl">
                        Have an{" "}
                        <span className="text-[#0A4266]">
                            industrial
                        </span>{" "}
                        process challenge?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Explore our resources or share your process and plant
                        requirements with our engineering team to discuss the right
                        approach for your application.
                    </p>

                    <Link
                        href="/contact"
                        className="group mt-9 inline-flex items-center gap-2 rounded-md bg-[#062B49] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#0A4266] hover:shadow-lg"
                    >
                        Contact MKS

                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                </div>
            </section>

        </main>
    );
}