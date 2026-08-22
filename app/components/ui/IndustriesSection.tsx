// components/IndustriesSection.tsx
import Link from "next/link";
import { 
  ArrowRight, 
  Utensils, 
  Candy, 
  Wheat, 
  GlassWater, 
  FlaskConical, 
  Milk, 
  Shirt, 
  Droplets 
} from "lucide-react";

const industries = [
  { name: "Food & Beverage", icon: Utensils },
  { name: "Sugar", icon: Candy },
  { name: "Starch", icon: Wheat },
  { name: "Distillery", icon: GlassWater },
  { name: "Chemical", icon: FlaskConical },
  { name: "Dairy", icon: Milk },
  { name: "Textile", icon: Shirt },
  { name: "Wastewater", icon: Droplets },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 text-xs font-semibold tracking-[0.3em] uppercase">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2 mb-4">
            Industries We Serve
          </h2>
          <p className="text-slate-600">
            Deep process understanding across diverse industrial sectors,
            delivering tailored engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 text-center border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="flex justify-center mb-3">
                  <Icon 
                    size={32} 
                    className="text-blue-600 group-hover:text-blue-700 transition-colors" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}