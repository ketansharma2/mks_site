import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
} from "lucide-react";

import { services } from "@/app/data/services";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

/* =====================================================
   STATIC PARAMS
===================================================== */

export function generateStaticParams() {
    return Object.keys(services).map((slug) => ({
        slug,
    }));
}

/* =====================================================
   SEO METADATA
===================================================== */

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params;

    const service =
        services[slug as keyof typeof services];

    if (!service) return {};

    return {
        title: service.metaTitle,
        description: service.metaDescription,

        alternates: {
            canonical: `https://mks.co.in/services/${slug}`,
        },

        openGraph: {
            title: service.metaTitle,
            description: service.metaDescription,
            url: `https://mks.co.in/services/${slug}`,
            siteName: "MKS Industrial Solutions",
            type: "website",
            images: [
                {
                    url: "/images/services/service-engineering.jpg",
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
    };
}

/* =====================================================
   PAGE
===================================================== */

export default async function ServicePage({
    params,
}: Props) {
    const { slug } = await params;

    const service =
        services[slug as keyof typeof services];

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-white text-[#062B49]">




            {/* =================================================
          HERO
      ================================================= */}

            <section className="bg-[#062B49]">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="grid min-h-[520px] items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">

                        {/* Content */}

                        <div className="max-w-2xl">

                            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
                                MKS Industrial Services
                            </p>

                            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[56px]">
                                {service.title}
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                                {service.description}
                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-2 bg-[#27B3C2] px-6 py-3.5 text-sm font-semibold text-[#062B49] transition hover:bg-[#5DD5DE]"
                            >
                                Discuss Your Requirement
                                <ArrowRight size={17} />
                            </Link>

                        </div>


                        {/* Image */}

                        <div className="relative overflow-hidden">

                            <div className="relative aspect-[4/3] w-full">

                                <Image
                                    src={`${service.image}`}
                                    alt={`${service.title} - MKS Industrial Solutions`}
                                    fill
                                    priority
                                    className="object-cover rounded-2xl"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />

                            </div>

                            {/* Image accent */}

                            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#27B3C2]" />

                        </div>

                    </div>

                </div>
            </section>


            {/* =================================================
          INTRODUCTION
      ================================================= */}

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">

                    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

                        <div>

                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                                Overview
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#062B49] sm:text-4xl">
                                {service.overviewTitle}
                            </h2>

                        </div>


                        <div className="max-w-3xl">

                            <p className="text-base leading-8 text-slate-600">
                                {service.introduction}
                            </p>

                            <p className="mt-5 text-base leading-8 text-slate-600">
                                {service.overviewDescription}
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* =================================================
          CAPABILITIES
      ================================================= */}

            <section className="bg-slate-50">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">

                    <div className="mb-12 max-w-2xl">

                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                            Our Capabilities
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#062B49] sm:text-4xl">
                            {service.capabilitiesTitle}
                        </h2>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                            {service.capabilitiesDescription}
                        </p>

                    </div>


                    <div className="grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">

                        {service.services.map((item, index) => (
                            <div
                                key={item.title}
                                className="group border-b border-r border-slate-200 bg-white p-7 transition-colors duration-300 hover:bg-[#062B49]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className="text-sm font-semibold text-[#27B3C2]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <CheckCircle2
                                        size={19}
                                        className="shrink-0 text-[#27B3C2]"
                                    />
                                </div>

                                <h3 className="mt-8 text-lg font-semibold text-[#062B49] transition-colors duration-300 group-hover:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                                    {item.description}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* =================================================
          ENGINEERING APPROACH
      ================================================= */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                        {/* Heading */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                                MKS Approach
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#062B49] sm:text-4xl">
                                {service.approachTitle}
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-base leading-8 text-slate-600">
                            {service.approach.map((paragraph) => (
                                <p key={paragraph}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                    </div>

                </div>
            </section>




        </main>
    );
}