// components/Hero.tsx
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import HeroVideo from "./HeroVideo";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
            {/* Background Video */}
            <HeroVideo />

            {/* Hero Content */}
            <div className="relative container mx-auto px-4 md:px-8 z-10">
                <div className="max-w-3xl">
                    <span className="inline-block text-blue-600 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                        MKS Industrial Solutions
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                        Engineering Industrial Solutions
                        <br />
                        <span className="text-blue-600">
                            For a Sustainable Future
                        </span>
                    </h1>


                    <p className="text-slate-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
                        Process engineering, turnkey plants and industrial solutions
                        designed for efficiency, reliability and sustainable growth.
                    </p>


                </div>
            </div>

            {/* button */}
            <div className=" absolute bottom-10  right-5 flex flex-wrap gap-4">


                <Link
                    href="#"
                    className=" bg-blue-600  text-slate-300 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-blue-700 transition flex items-center gap-2"
                >
                    Explore Solutions
                    <ArrowRight size={18} />
                </Link>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce">
                <ChevronDown size={32} />
            </div>
        </section >
    );
}