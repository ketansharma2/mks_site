// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About MKS", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      "Evaporation",
      "Drying",
      "Water & Wastewater",
      "Distillation",
      "Process Engineering",
      "Energy / Utility Solutions",
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      "MVR Evaporators",
      "MEE",
      "Dryers",
      "Caustic Recovery",
      "ZLD",
      "Other Equipment",
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      "Food & Beverage",
      "Sugar",
      "Starch",
      "Distillery",
      "Chemical",
      "Dairy",
      "Textile",
      "Wastewater",
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Engineering Services", href: "/engineering-services" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: ["Articles", "Case Studies", "Brochures", "FAQs", "Blogs"],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-3"
          : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative w-[140px] h-[42px] md:w-[160px] md:h-[48px] lg:w-[180px] lg:h-[55px]">
            <Image
              src="/images/mks.png"
              alt="MKS Industrial Solutions"
              fill
              priority
              className="object-contain"
            //   sizes="(max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition flex items-center gap-1 whitespace-nowrap ${
                  isScrolled
                    ? "text-slate-700 hover:text-blue-600"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className={isScrolled ? "text-slate-400" : "text-white/60"}
                  />
                )}
              </Link>
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-sm border border-gray-100 py-2">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub}
                      href="#"
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden xl:block">
          <Link
            href="/contact"
            className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition transform hover:-translate-y-0.5 ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-600 hover:bg-blue-50"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button - Visible on tablet and below */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`xl:hidden p-2 transition ${
            isScrolled ? "text-slate-700" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed top-[68px] md:top-[76px] left-0 w-full bg-white shadow-xl max-h-[calc(100vh-68px)] overflow-y-auto">
          <div className="container mx-auto px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3 text-slate-700 hover:text-blue-600 text-sm font-medium border-b border-slate-100"
                  onClick={() => {
                    if (!item.dropdown) {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  <span>{item.label}</span>
                  {item.dropdown && <ChevronDown size={16} className="text-slate-400" />}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1 py-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="block py-2 text-slate-600 hover:text-blue-600 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-blue-600 text-white text-center px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-blue-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}