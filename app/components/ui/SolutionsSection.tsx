// components/SolutionsSection.tsx
import Link from "next/link";
import {
  ArrowRight,
  Thermometer,
  Wind,
  Droplets,
  FlaskConical,
  Settings,
  Zap
} from "lucide-react";

const solutions = [
  {
    title: "Evaporation",
    desc: "Efficient thermal separation for concentration and volume reduction.",
    icon: Thermometer,
  },
  {
    title: "Drying",
    desc: "Advanced drying systems for powders, crystals and slurries.",
    icon: Wind,
  },
  {
    title: "Water & Wastewater",
    desc: "Complete treatment solutions for industrial water management.",
    icon: Droplets,
  },
  {
    title: "Distillation",
    desc: "Precision distillation for high-purity product recovery.",
    icon: FlaskConical,
  },
  {
    title: "Process Engineering",
    desc: "End-to-end process design, optimization and integration.",
    icon: Settings,
  },
  {
    title: "Energy / Utility Solutions",
    desc: "Energy-efficient utility systems and waste heat recovery.",
    icon: Zap,
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className=" flex items-center gap-3 justify-center">
            <span className="h-px w-10 bg-[#0A4266]" />
            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">
              Solutions
            </span></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2 mb-4">
            Engineered Solutions for Complex Industrial Processes
          </h2>
          <p className="text-slate-600">
            Comprehensive engineering and process solutions across multiple
            industrial applications, designed for performance and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-4">
                  <Icon
                    size={36}
                    className="text-blue-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {solution.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{solution.desc}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition gap-1 group-hover:gap-2"
                >
                  Explore Solution <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}