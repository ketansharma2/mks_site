import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Lightbulb,
  SearchCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services | MKS Industrial Solutions",
  description:
    "Explore MKS Industrial Solutions engineering services, energy and utility audits, project consultancy and feasibility studies for industrial process applications.",
  alternates: {
    canonical: "https://mks.co.in/services",
  },
};

const services = [
  {
    name: "Engineering Services",
    slug: "engineering-services",
    description:
      "Engineering expertise for process design, system development, optimization and industrial project requirements.",
    icon: Factory,
  },
  {
    name: "Energy / Utility Audit",
    slug: "energy-utility-audit",
    description:
      "Identify opportunities to improve energy efficiency, reduce utility consumption and optimize plant performance.",
    icon: Lightbulb,
  },
  {
    name: "Project Consultancy",
    slug: "project-consultancy",
    description:
      "Technical consultancy and engineering support from project planning through implementation and execution.",
    icon: ClipboardCheck,
  },
  {
    name: "Feasibility Studies",
    slug: "feasibility-studies",
    description:
      "Technical and process evaluations to assess project viability, performance requirements and implementation options.",
    icon: SearchCheck,
  },
];

const capabilities = [
  "Process Engineering",
  "Plant & System Optimization",
  "Energy & Utility Assessment",
  "Technical Consultancy",
  "Project Planning",
  "Process Feasibility",
];

export default function ServicesPage() {
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
                Our Services
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering Expertise
              <span className="block text-[#5DD5DE]">
                For Industrial Projects
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              MKS Industrial Solutions provides engineering, consultancy,
              energy assessment and feasibility services to help industries
              make informed decisions and develop efficient process solutions.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#062B49] sm:text-4xl">
            Services built around your project requirements
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            From early-stage feasibility to engineering and project
            consultancy, MKS supports industrial clients with practical,
            process-focused expertise.
          </p>

        </div>


        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#27B3C2]/50 hover:shadow-xl hover:shadow-[#062B49]/10"
              >

                {/* Decorative background */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#27B3C2]/5 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#062B49] text-[#5DD5DE] transition-colors duration-300 group-hover:bg-[#0A4266]">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>

                  <ArrowRight
                    size={19}
                    className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#27B3C2]"
                  />

                </div>

                <div className="relative mt-7">

                  <h3 className="text-xl font-semibold text-[#062B49]">
                    {service.name}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                </div>

                <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-[#0A4266]">
                  Explore Service
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

              </Link>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* Left */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                Engineering Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#062B49] sm:text-4xl">
                Practical engineering for real industrial challenges
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Our services are focused on understanding process
                requirements, identifying improvement opportunities and
                developing practical engineering solutions for industrial
                applications.
              </p>

            </div>


            {/* Right */}
            <div className="grid gap-3 sm:grid-cols-2">

              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5"
                >

                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#27B3C2]"
                  />

                  <span className="text-sm font-semibold text-[#062B49]">
                    {capability}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#062B49] sm:text-4xl">
            From requirement to practical solution
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            We focus on understanding the process first, then developing
            engineering recommendations aligned with technical and operational
            requirements.
          </p>

        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {[
            {
              number: "01",
              title: "Understand",
              text: "Study the process, plant requirements, operating conditions and project objectives.",
            },
            {
              number: "02",
              title: "Evaluate",
              text: "Assess technical requirements, process opportunities, utilities and potential improvements.",
            },
            {
              number: "03",
              title: "Recommend",
              text: "Develop practical engineering recommendations aligned with performance and project requirements.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-white p-7"
            >

              <span className="text-sm font-bold tracking-widest text-[#27B3C2]">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-[#062B49]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </section>



    </main>
  );
}