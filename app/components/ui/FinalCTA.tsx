// components/FinalCTA.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-blue-600"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"></div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
          Let's Build Your Next
          <br />
          <span className="text-blue-200">Industrial Solution</span>
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10">
          Talk to our engineering team about your process, project or industrial
          requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 md:px-10 py-3.5 md:py-4 text-sm font-semibold uppercase tracking-wider hover:bg-blue-50 transition transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/60 text-white px-8 md:px-10 py-3.5 md:py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition flex items-center gap-2"
          >
            Contact Engineering Team <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}