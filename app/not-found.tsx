"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Factory,
  Gauge,
  Settings2,
  Waves,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F5F9FC] text-[#062B49]">

      <div className="bg-[#062B49]  h-16 lg:h-24 sm:h-20 w-full"></div>
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#062B49 1px, transparent 1px),
            linear-gradient(90deg, #062B49 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#27B3C2]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0A4266]/10 blur-3xl" />

      {/* Main Content */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#27B3C2]" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0A4266]">
                404 • Page Not Found
              </span>
            </div>

            {/* 404 */}
            <div className="relative mb-4">
              <h1 className="select-none text-[120px] font-black leading-none tracking-[-0.08em] text-[#062B49] sm:text-[160px] lg:text-[190px]">
                404
              </h1>

              {/* Teal Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="
    absolute bottom-1 left-2
    h-1.5 sm:h-2
    w-52 sm:w-72 lg:w-[360px]
    origin-left
    rounded-full
    bg-[#27B3C2]
  "
              />
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              This page has left the{" "}
              <span className="text-[#0A8FA0]">process line.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              The page you're looking for may have been moved, removed, or is
              temporarily unavailable. Let's get you back to the MKS
              Industrial Solutions website.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#062B49] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0A4266] hover:shadow-lg hover:shadow-[#062B49]/20"
              >
                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to Home
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#062B49]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#062B49] transition-all duration-300 hover:border-[#27B3C2] hover:bg-[#27B3C2]/5"
              >
                Contact MKS
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Industrial Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-[560px]">
              {/* Outer Technical Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[7%] rounded-full border border-dashed border-[#0A4266]/20"
              />

              {/* Inner Circle */}
              <div className="absolute inset-[18%] rounded-full border border-[#27B3C2]/20" />

              {/* Center Machine */}
              <div className="absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[35%] border border-[#0A4266]/20 bg-white shadow-[0_25px_70px_rgba(6,43,73,0.12)] sm:h-56 sm:w-56">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#062B49] bg-[#F5F9FC]">
                  <Factory
                    size={48}
                    strokeWidth={1.5}
                    className="text-[#062B49]"
                  />

                  {/* Status Dot */}
                  <motion.span
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [1, 0.6, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute -right-2 -top-2 h-5 w-5 rounded-full border-4 border-white bg-[#27B3C2]"
                  />
                </div>
              </div>

              {/* Top Equipment */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[18%] top-[10%] flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0A4266]/15 bg-white shadow-lg"
              >
                <Gauge
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#0A4266]"
                />
              </motion.div>

              {/* Right Equipment */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[10%] top-[28%] flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0A4266]/15 bg-white shadow-lg"
              >
                <Settings2
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#0A4266]"
                />
              </motion.div>

              {/* Bottom Equipment */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[12%] left-[20%] flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0A4266]/15 bg-white shadow-lg"
              >
                <Waves
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#27B3C2]"
                />
              </motion.div>

              {/* Technical Nodes */}
              <span className="absolute left-[8%] top-1/2 h-3 w-3 rounded-full bg-[#27B3C2]" />
              <span className="absolute right-[5%] top-[60%] h-2.5 w-2.5 rounded-full bg-[#0A4266]" />
              <span className="absolute bottom-[7%] right-[25%] h-3 w-3 rounded-full bg-[#27B3C2]" />

              {/* Process Lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 500 500"
                fill="none"
              >
                <path
                  d="M95 130 C150 130 130 250 190 250"
                  stroke="#27B3C2"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  opacity="0.5"
                />

                <path
                  d="M410 190 C350 190 370 250 310 250"
                  stroke="#0A4266"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  opacity="0.35"
                />

                <path
                  d="M110 385 C170 385 150 300 205 290"
                  stroke="#0A4266"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  opacity="0.35"
                />
              </svg>

              {/* Floating 404 Badge */}
              <motion.div
                animate={{
                  rotate: [0, 3, -3, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[18%] right-[12%] rounded-2xl border border-[#27B3C2]/20 bg-white px-5 py-3 shadow-xl"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  System Status
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#27B3C2]" />
                  <span className="text-sm font-bold text-[#062B49]">
                    Page Offline
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Technical Information */}
      <div className="absolute bottom-0 left-0 right-0 hidden border-t border-[#062B49]/5 bg-white/50 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            MKS Industrial Solutions
          </p>

          <p className="text-xs text-slate-400">
            Engineering • Technology • Sustainability
          </p>
        </div>
      </div>
    </main>
  );
}