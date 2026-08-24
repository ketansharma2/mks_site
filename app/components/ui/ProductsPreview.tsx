"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "MVR Evaporators",
    desc: "Mechanical vapor recompression for energy-efficient evaporation.",
    img: "/images/product/mvr1.jpg",
  },
  {
    name: "MEE",
    desc: "Multiple effect evaporators for high-capacity concentration.",
    img: "/images/product/mee1.jpg",
  },
  {
    name: "Dryers",
    desc: "Industrial drying solutions for diverse materials.",
    img: "/images/product/dryer.png",
  },
  {
    name: "Caustic Recovery",
    desc: "Recovery and recycling of caustic solutions.",
    img: "/images/product/caustic.jpg",
  },
  {
    name: "ZLD",
    desc: "Zero liquid discharge systems for sustainable water management.",
    img: "/images/product/zld.jpg",
  },
  {
    name: "Other Equipment",
    desc: "Custom engineered equipment for specific process needs.",
    img: "/images/product/other.jpg",
  },
];

export default function ProductsPreview() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
          <div className=" flex items-center gap-3 ">
          <span className="h-px w-10 bg-[#0A4266]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0A4266]">
              Products
            </span></div>

            <h2 className="mt-2 text-3xl font-bold text-slate-800 md:text-4xl lg:text-5xl">
              Industrial Equipment & Process Systems
            </h2>
          </div>

          <Link
            href="/products"
            className="group mt-4 inline-flex items-center gap-2 font-semibold text-[#0A4266] transition hover:text-[#27B3C2] md:mt-0"
          >
            View All Products
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle overlay for consistent look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062B49]/30 to-transparent opacity-70" />
              </div>

              <div className="p-6">
                <h3 className="mb-1 text-lg font-bold text-slate-800">
                  {product.name}
                </h3>

                <p className="mb-4 text-sm leading-6 text-slate-600">
                  {product.desc}
                </p>

                <Link
                  href="/products"
                  className="group/link inline-flex items-center gap-1 text-sm font-semibold text-[#0A4266] transition-all hover:text-[#27B3C2]"
                >
                  View Product
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}