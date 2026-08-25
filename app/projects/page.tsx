import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Industrial Projects | MKS Industrial Solutions",
  description:
    "Explore industrial projects delivered by MKS Industrial Solutions across process engineering, evaporation, drying, water treatment, energy and utility systems.",
};

const projectCategories = [
  {
    title: "Process Engineering",
    description:
      "Process design and engineering solutions developed around specific production requirements, operating conditions and plant objectives.",
  },
  {
    title: "Evaporation & MVR",
    description:
      "Industrial evaporation and mechanical vapor recompression systems designed for efficient concentration and resource recovery.",
  },
  {
    title: "Drying Systems",
    description:
      "Engineered drying solutions for industrial applications with a focus on process efficiency, product quality and energy utilization.",
  },
  {
    title: "Water & Wastewater",
    description:
      "Water treatment, effluent treatment and wastewater management solutions for industrial applications.",
  },
  {
    title: "Energy & Utilities",
    description:
      "Utility and energy optimization projects aimed at improving plant efficiency and reducing operational energy requirements.",
  },
  {
    title: "Turnkey Solutions",
    description:
      "Integrated engineering and project execution covering process requirements, equipment, utilities and plant implementation.",
  },
];

const projects = [
  {
    title: "Industrial Evaporation System",
    category: "Evaporation",
    description:
      "Engineered evaporation solutions for industrial concentration and process applications.",
    image: "/images/project/indus1.png",
  },
  {
    title: "Water & Wastewater Treatment",
    category: "Water Treatment",
    description:
      "Industrial water and wastewater treatment systems designed around plant-specific requirements.",
      image: "/images/project/indus2.png",
  },
  {
    title: "Industrial Drying System",
    category: "Drying",
    description:
      "Process drying solutions developed for efficient moisture removal and reliable plant operation.",
      image: "/images/project/indus3.png",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white text-[#062B49]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-slate-200 bg-[#062B49]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
              Our Projects
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Industrial Engineering Projects
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              MKS Industrial Solutions delivers engineering and process
              solutions for industrial plants across multiple sectors.
              Our projects are developed around process requirements,
              operational efficiency and long-term plant performance.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                Project Experience
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#062B49] sm:text-4xl">
                Engineering solutions built around real industrial requirements
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-600">

              <p>
                Every industrial project has different process conditions,
                production requirements and utility demands. MKS approaches
                each project by understanding these requirements before
                developing the appropriate engineering solution.
              </p>

              <p>
                Our project experience covers process engineering, evaporation,
                drying, water and wastewater treatment, energy optimization
                and other industrial applications.
              </p>

              <p>
                From engineering and equipment selection to implementation,
                MKS focuses on practical solutions that support reliable
                plant operation and efficient resource utilization.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROJECT CATEGORIES
      ===================================================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
              Project Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#062B49] sm:text-4xl">
              Areas of Project Expertise
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Our engineering capabilities support a wide range of industrial
              processes and utility requirements.
            </p>

          </div>


          <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">

            {projectCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white p-7 transition-colors duration-200 hover:bg-slate-50"
              >

                <h3 className="text-lg font-semibold text-[#062B49]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                Selected Projects
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#062B49] sm:text-4xl">
                Industrial Applications
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                A selection of project areas representing the type of
                engineering and process solutions delivered by MKS.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#062B49] transition-colors hover:text-[#27B3C2]"
            >
              Discuss Your Project
              <ArrowRight size={16} />
            </Link>

          </div>


          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden border border-slate-200 bg-white"
              >

                <div className="relative aspect-[16/10] bg-slate-100">

                  <Image
                    src={project.image}
                    alt={`${project.title} - MKS Industrial Solutions`}
                    fill
                    className="object-cover rounded-2xl hover:scale-110 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                </div>


                <div className="p-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#27B3C2]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-[#062B49]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROJECT APPROACH
      ===================================================== */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27B3C2]">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#062B49] sm:text-4xl">
                From requirement to implementation
              </h2>

            </div>


            <div className="grid gap-6 sm:grid-cols-2">

              <div className="border-l-2 border-[#27B3C2] pl-5">
                <h3 className="font-semibold text-[#062B49]">
                  01. Understand
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Understanding process conditions, production requirements,
                  utilities and project objectives.
                </p>
              </div>


              <div className="border-l-2 border-[#27B3C2] pl-5">
                <h3 className="font-semibold text-[#062B49]">
                  02. Engineer
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Developing the appropriate process and engineering solution
                  based on project requirements.
                </p>
              </div>


              <div className="border-l-2 border-[#27B3C2] pl-5">
                <h3 className="font-semibold text-[#062B49]">
                  03. Execute
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Coordinating equipment, engineering and implementation
                  requirements for effective project execution.
                </p>
              </div>


              <div className="border-l-2 border-[#27B3C2] pl-5">
                <h3 className="font-semibold text-[#062B49]">
                  04. Support
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Supporting reliable operation and long-term performance
                  through practical engineering solutions.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}