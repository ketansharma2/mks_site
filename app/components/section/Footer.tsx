// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
    ChevronRight,
} from "lucide-react";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

const companyLinks = [
    { name: "About MKS", href: "/about" },
    { name: "Our Capabilities", href: "/capabilities" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
];

const industryLinks = [
    { name: "Food & Beverage", href: "/industries/food-beverage" },
    { name: "Sugar", href: "/industries/sugar" },
    { name: "Starch", href: "/industries/starch" },
    { name: "Distillery", href: "/industries/distillery" },
    { name: "Chemical", href: "/industries/chemical" },
    { name: "Dairy", href: "/industries/dairy" },
    { name: "Pharmaceuticals", href: "/industries/pharmaceuticals" },
    { name: "Pulp & Paper", href: "/industries/pulp-paper" },
    { name: "Textile", href: "/industries/textile" },
    { name: "Wastewater", href: "/industries/wastewater" },
];

const productLinks = [
    { name: "MVR Systems", href: "/products/mvr" },
    { name: "Evaporators", href: "/products/evaporators" },
    { name: "Dryers", href: "/products/dryers" },
    { name: "Distillation Systems", href: "/products/distillation" },
    { name: "Water Treatment Systems", href: "/products/water-treatment" },
    { name: "Custom Process Systems", href: "/products/custom-process-systems" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#02131F] text-white">
            {/* Subtle background atmosphere */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#0A4266]/20 blur-3xl" />

                <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#27B3C2]/5 blur-3xl" />

                {/* Technical grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Main Footer */}
            <div className="relative">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">

                    {/* Top Brand Strip */}
                    <div className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
                        <div>
                            <div className="relative mb-5 h-[48px] w-[175px]">
                                <Image
                                    src="/images/mks_logo.png"
                                    alt="MKS Industrial Solutions"
                                    fill
                                    className="object-contain object-left"
                                    sizes="175px"
                                />
                            </div>

                            <p className="max-w-xl text-sm leading-7 text-slate-400">
                                Engineering process, utility and industrial solutions
                                designed for efficiency, reliability and sustainable
                                growth.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                            <span className="h-px w-8 bg-[#27B3C2]" />
                            Engineering • EPC • Process Solutions
                        </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

                        {/* Company */}
                        <div className="lg:col-span-3">
                            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
                                Company
                            </h3>

                            <ul className="space-y-3">
                                {companyLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-[#5DD5DE]"
                                        >
                                            <ChevronRight
                                                size={13}
                                                className="text-[#27B3C2] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                                            />
                                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Industries */}
                        <div className="lg:col-span-3">
                            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
                                Industries
                            </h3>

                            <ul className="space-y-3">
                                {industryLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-[#5DD5DE]"
                                        >
                                            <ChevronRight
                                                size={13}
                                                className="text-[#27B3C2] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                                            />

                                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="lg:col-span-3">
                            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
                                Products
                            </h3>

                            <ul className="space-y-3">
                                {productLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-[#5DD5DE]"
                                        >
                                            <ChevronRight
                                                size={13}
                                                className="text-[#27B3C2] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                                            />

                                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="lg:col-span-3">
                            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">
                                Get In Touch
                            </h3>

                            <div className="space-y-5">

                                {/* Phone */}
                                <a
                                    href="tel:+911234567890"
                                    className="group flex gap-4"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] transition-colors group-hover:border-[#27B3C2]/40 group-hover:bg-[#27B3C2]/10">
                                        <Phone
                                            size={17}
                                            className="text-[#27B3C2]"
                                        />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                                            Phone
                                        </p>

                                        <span className="text-sm text-slate-300 transition-colors group-hover:text-[#5DD5DE]">
                                            +91 12345 67890
                                        </span>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:sales@mks.co.in"
                                    className="group flex gap-4"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] transition-colors group-hover:border-[#27B3C2]/40 group-hover:bg-[#27B3C2]/10">
                                        <Mail
                                            size={17}
                                            className="text-[#27B3C2]"
                                        />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                                            Email
                                        </p>

                                        <span className="text-sm text-slate-300 transition-colors group-hover:text-[#5DD5DE]">
                                            sales@mks.co.in
                                        </span>
                                    </div>
                                </a>

                                {/* Address */}
                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03]">
                                        <MapPin
                                            size={17}
                                            className="text-[#27B3C2]"
                                        />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                                            Location
                                        </p>

                                        <p className="text-sm leading-6 text-slate-400">
                                            Manana Road, Samalkha,
                                            <br />
                                            District Panipat, Haryana,
                                            <br />
                                            India – 132101
                                        </p>
                                    </div>
                                </div>

                                {/* Enquiry */}
                                <Link
                                    href="/contact"
                                    className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#5DD5DE]"
                                >
                                    Business Enquiry

                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Social + Trust Row */}
                    <div className="mt-16 flex flex-col gap-7 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">

                        <div className="flex items-center gap-3">
                            <span className="mr-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                                Follow MKS
                            </span>

                            <Link
                                href="#"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition-all hover:border-[#27B3C2]/50 hover:bg-[#27B3C2]/10 hover:text-[#5DD5DE]"
                            >
                                <FaFacebook size={15} />
                            </Link>

                            <Link
                                href="#"
                                aria-label="Twitter"
                                className="flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition-all hover:border-[#27B3C2]/50 hover:bg-[#27B3C2]/10 hover:text-[#5DD5DE]"
                            >
                                <FaTwitter size={15} />
                            </Link>

                            <Link
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition-all hover:border-[#27B3C2]/50 hover:bg-[#27B3C2]/10 hover:text-[#5DD5DE]"
                            >
                                <FaLinkedinIn size={15} />
                            </Link>

                            <Link
                                href="#"
                                aria-label="YouTube"
                                className="flex h-9 w-9 items-center justify-center border border-white/10 text-slate-400 transition-all hover:border-[#27B3C2]/50 hover:bg-[#27B3C2]/10 hover:text-[#5DD5DE]"
                            >
                                <FaYoutube size={15} />
                            </Link>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#27B3C2]" />
                            Delivering engineered solutions worldwide
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white/[0.07]">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 sm:px-6 md:flex-row lg:px-8">

                        <p className="text-xs text-slate-600">
                            © {new Date().getFullYear()} MKS Industrial Solutions.
                            All rights reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                            <Link
                                href="/privacy-policy"
                                className="text-slate-600 transition-colors hover:text-slate-300"
                            >
                                Privacy Policy
                            </Link>

                            <span className="text-slate-800">•</span>

                            <Link
                                href="/terms"
                                className="text-slate-600 transition-colors hover:text-slate-300"
                            >
                                Terms & Conditions
                            </Link>

                            <span className="text-slate-800">•</span>

                            <Link
                                href="/sitemap"
                                className="text-slate-600 transition-colors hover:text-slate-300"
                            >
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}