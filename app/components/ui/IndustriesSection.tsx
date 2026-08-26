// components/IndustriesSection.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    name: "Food & Beverage",
    image: "/images/industries/food.jpg",
    description: "Process solutions for efficient food production.",
  },
  {
    name: "Sugar",
    image: "/images/industries/sugar.jpg",
    description: "Evaporation and concentration solutions for sugar processing.",
  },
  {
    name: "Starch",
    image: "/images/industries/starch.jpg",
    description: "Efficient processing and concentration systems.",
  },
  {
    name: "Distillery",
    image: "/images/industries/process.jpg",
    description: "Energy-efficient solutions for distillery operations.",
  },
  {
    name: "Chemical",
    image: "/images/industries/chemical.jpg",
    description: "Specialized process systems for chemical industries.",
  },
  {
    name: "Dairy",
    image: "/images/industries/dairy.jpg",
    description: "Hygienic and efficient dairy processing solutions.",
  },
  {
    name: "Pharmaceuticals",
    image: "/images/industries/pharma.jpg",
    description: "Precision process solutions for pharmaceutical manufacturing.",
  },
  {
    name: "Pulp & Paper",
    image: "/images/industries/paper.jpg",
    description: "Process and water management solutions for pulp and paper production.",
  },
  {
    name: "Textile",
    image: "/images/industries/textile.jpg",
    description: "Water and process solutions for textile manufacturing.",
  },
  {
    name: "Wastewater",
    image: "/images/industries/waste.jpg",
    description: "Advanced treatment and water recovery systems.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0A4266]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0A4266]">
                Industries 
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#062B49] md:text-4xl lg:text-5xl">
              Industries We Serve
              
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Deep process understanding across diverse industrial sectors,
              delivering tailored engineering solutions for complex
              production requirements.
            </p>
          </div>

          <Link
            href="/industries"
            className="group mt-6 hidden items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#062B49] transition-colors hover:text-[#0A4266] md:inline-flex"
          >
            Explore Industries

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <Link
              href="/industries"
              key={industry.name}
              className="group relative block aspect-[4/3] overflow-hidden bg-[#062B49]"
            >
              {/* Image */}
              <Image
                src={industry.image}
                alt={`${industry.name} industrial solutions`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Navy overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041C2D] via-[#062B49]/35 to-transparent" />

              {/* Hover navy overlay */}
              <div className="absolute inset-0 bg-[#062B49]/10 transition-colors duration-500 group-hover:bg-[#062B49]/45" />

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {industry.name}
                    </h3>

                    <p className="mt-2 max-w-[230px] translate-y-2 text-xs leading-5 text-white/75 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {industry.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#062B49]">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#062B49]"
          >
            Explore Industries
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}