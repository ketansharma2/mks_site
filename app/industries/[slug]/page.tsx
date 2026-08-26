
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { industries,getIndustryBySlug } from "@/app/data/industries";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) return {};

  return {
    title: industry.seo.title,
    description: industry.seo.description,
    keywords: industry.seo.keywords,

    alternates: {
      canonical: `https://mks.co.in/industries/${industry.slug}`,
    },

    openGraph: {
      title: industry.seo.title,
      description: industry.seo.description,
      url: `https://mks.co.in/industries/${industry.slug}`,
      siteName: "MKS Industrial Solutions",
      type: "website",
      images: [
        {
          url: industry.image,
          width: 1600,
          height: 900,
          alt: `${industry.name} industry solutions`,
        },
      ],
    },
  };
}

export default async function IndustryPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;

  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[600px] overflow-hidden">
        <Image
          src={industry.image}
          alt={`${industry.name} industry`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* MKS Hero Overlay */}
        <div className="absolute inset-0 bg-[#062B49]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#062B49] via-[#062B49]/65 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-24 lg:px-8">

          <div
           
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-white/60">
              <Link
                href="/industries"
                className="transition hover:text-[#5DD5DE]"
              >
                Industries
              </Link>

              <span>/</span>

              <span className="text-white/80">
                {industry.name}
              </span>
            </div>

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#27B3C2]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
                {industry.name}
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {industry.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              {industry.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-[#27B3C2] px-6 py-3.5 font-semibold text-white transition hover:bg-[#5DD5DE]"
              >
                Discuss Your Requirement

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center rounded-md border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#27B3C2] via-[#5DD5DE] to-transparent" />
      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#27B3C2]" />

                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                  Industry Overview
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#062B49] sm:text-4xl">
                Understanding the{" "}
                <span className="text-[#0A4266]">
                  {industry.name}
                </span>{" "}
                Industry
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                {industry.overview}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#27B3C2]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                Applications
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold text-[#062B49] sm:text-4xl">
              Industry Applications
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Key areas where MKS process and treatment systems can
              support {industry.name.toLowerCase()} operations.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {industry.applications.map((application, index) => (
              <div
                key={application}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#27B3C2]/40 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#062B49] transition-colors duration-300 group-hover:bg-[#27B3C2]">
                  <CheckCircle2
                    size={19}
                    className="text-white"
                  />
                </div>

                <span className="font-medium text-slate-700">
                  {application}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#27B3C2]" />

                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                  MKS Solutions
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold text-[#062B49] sm:text-4xl">
                Solutions for{" "}
                <span className="text-[#0A4266]">
                  {industry.name}
                </span>
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              Engineering systems selected around the process,
              water, energy, and operational requirements of the
              industry.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {industry.solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="text-4xl font-bold text-slate-400 transition-colors duration-300 group-hover:text-[#27B3C2]/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowRight
                    size={20}
                    className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#27B3C2]"
                  />

                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#062B49]">
                  {solution.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {solution.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#27B3C2] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#062B49] py-20 lg:py-24">

        {/* Decorative Elements */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#27B3C2]/10" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-[#5DD5DE]/10" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#5DD5DE]" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5DD5DE]">
                Value
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Operational Benefits
            </h2>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">

            {industry.benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex gap-4 border-b border-white/10 pb-6"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#5DD5DE]"
                />

                <span className="leading-7 text-white/75">
                  {benefit}
                </span>
              </div>
            ))}

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
            Planning a{" "}
            <span className="text-[#0A4266]">
              {industry.name.toLowerCase()}
            </span>{" "}
            project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Share your process and plant requirements with our
            engineering team to discuss the right approach for your
            application.
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