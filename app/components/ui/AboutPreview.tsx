// components/AboutPreview.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function AboutPreview() {
  const features = [
    "End-to-end EPC capabilities",
    "In-house design & fabrication",
    "15+ years of engineering excellence",
    "100+ successful project deliveries",
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-sm">
            <Image
              src="/images/"
              alt="MKS Industrial Solutions engineering facility"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-blue-600/10"></div>
            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-sm shadow-lg">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">
              About MKS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2 mb-4 leading-tight">
              Engineering Expertise That Turns Ideas Into Industrial Solutions
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              MKS Industrial Solutions is a premier engineering and EPC
              organization delivering end-to-end industrial process solutions.
              With deep expertise in evaporation, drying, water treatment, and
              energy systems, we partner with clients across diverse industries
              to design, fabricate, and commission turnkey plants that drive
              efficiency and sustainability.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition gap-2 group"
            >
              Discover MKS
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}