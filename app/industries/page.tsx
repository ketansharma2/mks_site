import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Factory,
  FlaskConical,
  Droplets,
  Wheat,
  Pill,
  FileText,
  Shell,
  Candy,
  Shirt,
  Utensils,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | MKS Industrial Solutions",
  description:
    "Explore MKS Industrial Solutions for chemical, dairy, distillery, food and beverage, pharmaceutical, pulp and paper, starch, sugar, textile, and water and wastewater industries.",
  alternates: {
    canonical: "https://mks.co.in/industries",
  },
};

const industries = [
  {
    name: "Chemical",
    slug: "chemical",
    description:
      "Process, evaporation, recovery and wastewater solutions for chemical manufacturing.",
    icon: FlaskConical,
  },
  {
    name: "Dairy",
    slug: "dairy",
    description:
      "Process and utility solutions supporting efficient dairy production and resource management.",
    icon: Droplets,
  },
  {
    name: "Distillery",
    slug: "distillery",
    description:
      "Evaporation, wastewater and energy-recovery solutions for distillery operations.",
    icon: Factory,
  },
  {
    name: "Food & Beverage",
    slug: "food-beverage",
    description:
      "Process, evaporation, drying and water-management solutions for food and beverage manufacturing.",
    icon: Utensils,
  },
  {
    name: "Pharmaceuticals",
    slug: "pharmaceuticals",
    description:
      "Controlled process and utility solutions for demanding pharmaceutical applications.",
    icon: Pill,
  },
  {
    name: "Pulp & Paper",
    slug: "pulp-paper",
    description:
      "Evaporation, chemical recovery, wastewater and energy-efficiency solutions for pulp and paper plants.",
    icon: FileText,
  },
  {
    name: "Starch",
    slug: "starch",
    description:
      "Process and evaporation solutions for starch extraction, concentration and refining.",
    icon: Wheat,
  },
  {
    name: "Sugar",
    slug: "sugar",
    description:
      "Evaporation, process and energy solutions supporting efficient sugar manufacturing.",
    icon: Candy,
  },
  {
    name: "Textile",
    slug: "textile",
    description:
      "Water, wastewater, evaporation and utility solutions for textile processing.",
    icon: Shirt,
  },
  {
    name: "Water & Wastewater",
    slug: "water-wastewater",
    description:
      "ETP, ZLD, water recovery and wastewater treatment solutions for industrial applications.",
    icon: Shell,
  },
];

const services = [
    {
      name: "Engineering Services",
      slug: "engineering-services",
    },
    {
      name: "Energy / Utility Audit",
      slug: "energy-utility-audit",
    },
    {
      name: "Project Consultancy",
      slug: "project-consultancy",
    },
    {
      name: "Feasibility Studies",
      slug: "feasibility-studies",
    },
  ];

export default function IndustriesPage() {
  return (
    <main className="bg-white text-[#062B49]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#062B49]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(39,179,194,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#27B3C2]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
                Industries
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering Solutions
              <span className="block text-[#5DD5DE]">
                Across Process Industries
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              MKS Industrial Solutions delivers process engineering,
              evaporation, drying, water and wastewater, and energy solutions
              for industries with demanding production and utility
              requirements.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
            Industries We Serve
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#062B49] sm:text-4xl">
            Solutions built around your industry
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Every industry has different process conditions, production
            requirements and environmental challenges. Our engineering
            approach is tailored to the specific needs of each application.
          </p>
        </div>


        {/* Industry Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#27B3C2]/50 hover:shadow-xl hover:shadow-[#062B49]/10"
              >

                {/* subtle background */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#27B3C2]/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#062B49] text-[#5DD5DE] transition-colors duration-300 group-hover:bg-[#0A4266]">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold text-[#062B49]">
                    {industry.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {industry.description}
                  </p>
                </div>

                <div className="relative mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-[#0A4266]">
                  Explore Industry
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

              </Link>
            );
          })}

        </div>
      </section>


     {/* =====================================================
    SERVICES
===================================================== */}
<section className="bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

      {/* Left */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
          Our Services
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#062B49] sm:text-4xl">
          Engineering expertise from concept to execution
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
          MKS provides engineering and consultancy services that help
          industries evaluate, plan and execute efficient process and
          utility solutions.
        </p>

        <Link
          href="/services"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#062B49] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0A4266]"
        >
          Explore All Services
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Right */}
      <div className="grid gap-3 sm:grid-cols-2">

        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#27B3C2]/50 hover:shadow-md"
          >
            <CheckCircle2
              size={20}
              className="shrink-0 text-[#27B3C2]"
            />

            <span className="text-sm font-semibold text-[#062B49]">
              {service.name}
            </span>

            <ArrowRight
              size={15}
              className="ml-auto text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#27B3C2]"
            />
          </Link>
        ))}

      </div>

    </div>
  </div>
</section>

    

    </main>
  );
}