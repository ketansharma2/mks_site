// app/about/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MKS Industrial Solutions",
  description:
    "Learn about MKS Industrial Solutions, our engineering expertise, industrial process solutions and commitment to efficient and sustainable operations.",
  alternates: {
    canonical: "https://mks.co.in/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-700">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}
      <section className="bg-[#062B49]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">

          <div className="max-w-3xl">



            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Engineering Expertise
              <span className="block text-[#5DD5DE]">
                For Industrial Solutions
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              MKS Industrial Solutions is an EPC-based organization providing
              engineering, manufacturing, consultancy and turnkey process
              solutions for diverse industrial applications.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="py-16 md:py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">

            <Image
              src="/images/about.jpg"
              alt="MKS Industrial Solutions engineering and process equipment"
              fill
              className="object-cover"
            />

          </div>


          {/* Content */}
          <div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4266]">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#062B49] md:text-4xl">
              Engineering Solutions
              <span className="block text-[#0A4266]">
                Built Around Your Process
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 md:text-base">

              <p>
                MKS Industrial Solutions is an EPC-based organization providing
                engineering services from feasibility studies to designing
                advanced industrial engineering technologies for the global
                industrial market.
              </p>

              <p>
                Our dedicated front-end organization delivers optimum
                full-field development solutions and specialized technical
                studies.
              </p>

              <p>
                Our multidisciplinary organization covers the technical and
                managerial functions required to execute major and complex
                engineering tasks across onshore and offshore environments.
              </p>

            </div>

            <div className="mt-7 border-l-2 border-[#27B3C2] pl-5">

              <p className="text-sm font-medium leading-6 text-[#062B49]">
                For more than 15 years, MKS has developed industry-leading
                expertise in process engineering technologies and turnkey
                industrial solutions.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR EXPERTISE
      ===================================================== */}
      <section className="bg-slate-50 py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4266]">
              Our Expertise
            </p>

            <h2 className="text-3xl font-bold text-[#062B49] md:text-4xl">
              Process Engineering Technologies
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
              MKS has developed specialized expertise across process
              technologies used in food processing, bioprocessing, chemical
              processing and related industries.
            </p>

          </div>


          <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">

            {[
              "Distillation",
              "Evaporation",
              "Drying",
              "Fermentation",
              "Separation Process Techniques",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 border-b border-slate-200 py-5"
              >

                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#27B3C2]"
                  strokeWidth={1.8}
                />

                <span className="text-sm font-semibold text-[#062B49] md:text-base">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          TURNKEY SOLUTIONS
      ===================================================== */}
      <section className="py-16 md:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* Left */}
            <div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4266]">
                Turnkey Solutions
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#062B49] md:text-4xl">
                From Engineering
                <span className="block text-[#0A4266]">
                  To Execution
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                We deliver turnkey solutions covering design, engineering,
                manufacturing, consultancy and supply of equipment for
                industrial projects.
              </p>

            </div>


            {/* Right */}
            <div className="grid border-t border-slate-200 sm:grid-cols-2">

              {[
                "Feasibility Studies",
                "Process Design",
                "Engineering",
                "Manufacturing",
                "Consultancy",
                "Equipment Supply",
              ].map((item, index) => (

                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-slate-200 py-5"
                >

                  <span className="text-xs font-bold text-[#27B3C2]">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-semibold text-[#062B49]">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}
      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-10">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4266]">
              Industries We Serve
            </p>

            <h2 className="text-3xl font-bold text-[#062B49] md:text-4xl">
              Industry-Focused Process Solutions
            </h2>

          </div>


          <div className="grid gap-8 md:grid-cols-3">

            {/* Food */}
            <IndustryBlock
              title="Food Processing"
              items={[
                "Liquid Glucose",
                "Maltodextrin Powder",
                "Dairy Products",
                "Fructose",
                "Sorbitol",
              ]}
            />

            {/* Chemical */}
            <IndustryBlock
              title="Chemical / Petrochemical"
              items={[
                "Fuel Ethanol",
                "Distillery",
                "Lube Refining",
              ]}
            />
            {/* Sugar */}
            <IndustryBlock
              title="Sugar"
              items={[
                "Sugar Concentration",
                "Sugar Crystallization",
                "Molasses Concentration",
                "Syrup Concentration",
              ]}
            />

            {/* Starch */}
            <IndustryBlock
              title="Starch"
              items={[
                "Starch Processing",
                "Starch Concentration",
                "Glucose Production",
                "Maltodextrin Production",
              ]}
            />
            {/* Distillery */}
            <IndustryBlock
              title="Distillery"
              items={[
                "Fuel Ethanol",
                "Spent Wash Treatment",
                "Spent Lees Treatment",
                "Zero Liquid Discharge",
              ]}
            />

            {/* Dairy */}
            <IndustryBlock
              title="Dairy"
              items={[
                "Milk Concentration",
                "Whey Concentration",
                "Dairy Wastewater Treatment",
                "Milk Powder Processing",
              ]}
            />

            {/* Textile */}
            <IndustryBlock
              title="Textile"
              items={[
                "Textile Wastewater Treatment",
                "Dyeing Effluent Treatment",
                "Chemical Recovery",
                "Zero Liquid Discharge",
              ]}
            />

            {/* Water */}
            <IndustryBlock
              title="Water / Wastewater"
              items={[
                "Water Treatment Plant",
                "Effluent Treatment Plant",
                "Zero Liquid Discharge Plant",
              ]}
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          CLOSING / CTA
      ===================================================== */}
      <section className="border-b border-slate-200 bg-white py-16 md:py-20">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 sm:px-6 md:flex-row md:items-center lg:px-8">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4266]">
              Our Commitment
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#062B49] md:text-3xl">
              Customized Engineering for Your Industrial Requirements
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Our wide product range and ability to develop new products
              allows us to provide unbiased recommendations and customized
              process solutions based on your needs.
            </p>

          </div>


          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 bg-[#062B49] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#0A4266]"
          >
            Talk to MKS
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

      </section>

    </main>
  );
}


/* =============================================================
   INDUSTRY BLOCK
============================================================= */

function IndustryBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className=" group border border-[#062B49]/30 p-6 rounded-3xl hover:bg-[#062B49] transition-all duration-300">

      <h3 className="text-lg font-semibold text-[#062B49] group-hover:text-white">
        {title}
      </h3>

      <div className="mt-5 space-y-3">

        {items.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3 text-sm text-[#062B49]/75 group-hover:text-white/75"
          >

            <span className="h-1.5 w-1.5 shrink-0 bg-[#27B3C2]" />

            {item}

          </div>

        ))}

      </div>

    </div>
  );
}