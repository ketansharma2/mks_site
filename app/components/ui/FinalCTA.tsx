// components/FinalCTA.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#062B49] py-20 md:py-24 lg:py-28">
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#27B3C2]/10 blur-3xl" />
        <div className="absolute -left-40 -bottom-40 h-[450px] w-[450px] rounded-full bg-[#0A4266]/50 blur-3xl" />

        {/* Subtle light accent */}
        <div className="absolute right-[10%] top-1/2 hidden h-[1px] w-48 bg-gradient-to-r from-transparent via-[#27B3C2]/40 to-transparent lg:block" />
      </div>

      {/* Decorative industrial curves */}
      <div className="absolute -right-32 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-white/[0.06] lg:block" />

      <div className="absolute -right-4 top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[#5DD5DE]/10 lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#27B3C2]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5DD5DE]">
                Engineering Partnership
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]">
              Let&apos;s Build Your Next
              <span className="mt-2 block text-[#5DD5DE]">
                Industrial Solution.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              From process engineering and equipment design to complete EPC
              execution, MKS delivers engineered solutions built around your
              process, performance and production requirements.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#27B3C2] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#041C2D] transition-all duration-300 hover:bg-[#5DD5DE] hover:-translate-y-0.5"
              >
                Start Your Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/25 bg-white/[0.04] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#27B3C2]/60 hover:bg-white/[0.08]"
              >
                Talk to Our Engineers

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right Trust Panel */}
          <div className="relative lg:pl-8">
            <div className="border-l border-white/10 pl-7 md:pl-9">

              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Why Partner With MKS
              </p>

              <div className="space-y-5">
                {[
                  "End-to-end EPC capabilities",
                  "In-house design & fabrication",
                  "15+ years of engineering expertise",
                  "100+ successful project deliveries",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#27B3C2] transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="text-sm leading-6 text-slate-300 md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Small accent */}
              <div className="mt-9 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#27B3C2]" />
                <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Built for performance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}