// components/ProductsPreview.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "MVR Evaporators",
    desc: "Mechanical vapor recompression for energy-efficient evaporation.",
  },
  {
    name: "MEE",
    desc: "Multiple effect evaporators for high-capacity concentration.",
  },
  {
    name: "Dryers",
    desc: "Industrial drying solutions for diverse materials.",
  },
  {
    name: "Caustic Recovery",
    desc: "Recovery and recycling of caustic solutions.",
  },
  {
    name: "ZLD",
    desc: "Zero liquid discharge systems for sustainable water management.",
  },
  {
    name: "Other Equipment",
    desc: "Custom engineered equipment for specific process needs.",
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">
              Products
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2">
              Industrial Equipment & Process Systems
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition gap-2 mt-4 md:mt-0 group"
          >
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-slate-50 overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 bg-blue-600/5">
                <Image
                  src="/api/placeholder/400/300"
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{product.desc}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition gap-1 group-hover:gap-2"
                >
                  View Product <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}