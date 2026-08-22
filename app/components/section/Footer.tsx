// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    ArrowRight,
    ChevronRight
} from "lucide-react";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer>


            {/* Main Footer */}
            <div className="bg-slate-900 text-white/80">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
                        {/* Column 1 - Company Info */}
                        <div className="lg:col-span-1">
                            <div className="relative w-[180px] h-[50px] mb-4">
                                <Image
                                    src="/images/mks_logo.png"
                                    alt="MKS Industrial Solutions"
                                    fill
                                    className="object-contain"
                                    sizes="180px"
                                />
                            </div>
                            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                                MKS Industrial Solutions delivers engineered process, utility and
                                industrial solutions designed for efficiency, reliability and
                                sustainable growth.
                            </p>
                            <div className="flex gap-3 mt-6">
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 transition flex items-center justify-center text-white/60 hover:text-white"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook size={16} />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 transition flex items-center justify-center text-white/60 hover:text-white"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter size={16} />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 transition flex items-center justify-center text-white/60 hover:text-white"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn size={16} />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 transition flex items-center justify-center text-white/60 hover:text-white"
                                    aria-label="YouTube"
                                >
                                    <FaYoutube size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* Column 2 - Company */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                                Company
                            </h4>
                            <ul className="space-y-2.5 text-sm">
                                <li>
                                    <Link href="/about" className="text-white/70 hover:text-cyan-400 transition flex items-center gap-1 group">
                                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                                        About MKS
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/capabilities" className="text-white/70 hover:text-cyan-400 transition flex items-center gap-1 group">
                                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                                        Our Capabilities
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries" className="text-white/70 hover:text-cyan-400 transition flex items-center gap-1 group">
                                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                                        Industries
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-white/70 hover:text-cyan-400 transition flex items-center gap-1 group">
                                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-white/70 hover:text-cyan-400 transition flex items-center gap-1 group">
                                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 - Solutions */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                                Solutions
                            </h4>
                            <ul className="space-y-2.5 text-sm">
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Evaporation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Drying
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Water & Wastewater
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Distillation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Process Engineering
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Energy / Utility Solutions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 - Products */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                                Products
                            </h4>
                            <ul className="space-y-2.5 text-sm">
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        MVR Systems
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Evaporators
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Dryers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Distillation Systems
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Water & Wastewater Systems
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-cyan-400 transition">
                                        Custom Process Systems
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 5 - Contact */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                                Get In Touch
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-3">
                                    <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                                    <a href="tel:+911234567890" className="text-white/70 hover:text-cyan-400 transition">
                                        +91 12345 67890
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                                    <a href="mailto:info@mksindustrial.com" className="text-white/70 hover:text-cyan-400 transition">
                                        Sales@mks.co.in


                                    </a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-white/70">
                                        Manana Road, Samalkha,
                                        District Panipat ,
                                        Haryana
                                        India – 132101
                                    </span>
                                </li>
                                <li className="mt-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition gap-1 group"
                                    >
                                        Business Enquiry
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/10">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-white/40">
                                © {new Date().getFullYear()} MKS Industrial Solutions. All rights reserved.
                            </p>
                            <div className="flex items-center gap-4 text-xs">
                                <Link href="/privacy-policy" className="text-white/40 hover:text-white/60 transition">
                                    Privacy Policy
                                </Link>
                                <span className="text-white/20">|</span>
                                <Link href="/terms" className="text-white/40 hover:text-white/60 transition">
                                    Terms & Conditions
                                </Link>
                                <span className="text-white/20">|</span>
                                <Link href="/sitemap" className="text-white/40 hover:text-white/60 transition">
                                    Sitemap
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}