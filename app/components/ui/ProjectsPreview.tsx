// components/ProjectsPreview.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "ZLD Plant for Chemical Industry",
    industry: "Chemical",
    location: "Gujarat, India",
    image: "/images/project/zld1.jpg",
  },
  {
    title: "MVR Evaporator System",
    industry: "Food & Beverage",
    location: "Maharashtra, India",
    image: "/images/project/mvr1.jpg",
  },
  {
    title: "Distillation Unit for Distillery",
    industry: "Distillery",
    location: "Karnataka, India",
    image: "/images/project/dist.jpg",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
          <div className=" flex items-center gap-3 ">
          <span className="h-px w-10 bg-[#0A4266]" />
            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">
              Projects
            </span></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition gap-2 mt-4 md:mt-0 group"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 bg-blue-600/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm">{project.industry}</p>
                <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition gap-1 mt-3 group-hover:gap-2"
                >
                  View Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}