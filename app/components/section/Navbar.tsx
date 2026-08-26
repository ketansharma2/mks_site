"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

type NavChild = {
  label: string;
  href: string;
};

type MegaMenuGroup = {
  label: string;
  href: string;
  children?: NavChild[];
};

type NavItem = {
  label: string;
  href: string;
  dropdown?: NavChild[];
  megaMenu?: MegaMenuGroup[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Engineering Services",
        href: "/services/engineering-services",
      },
      {
        label: "Energy / Utility Audit",
        href: "/services/energy-utility-audit",
      },
      {
        label: "Project Consultancy",
        href: "/services/project-consultancy",
      },
      {
        label: "Feasibility Studies",
        href: "/services/feasibility-studies",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    megaMenu: [
      {
        label: "Water Treatment",
        href: "/products/water-treatment",
        children: [
          {
            label: " Zero Liquid Discharge (ZLD) Plant",
            href: "/products/water-treatment/product-1",
          },
          {
            label: "Sewage Treatment Plant (STP)",
            href: "/products/water-treatment/product-2",
          },
          {
            label: "Effluent Treatment Plant (ETP)",
            href: "/products/water-treatment/product-3",
          },
          {
            label: "Industrial RO Plants",
            href: "/products/water-treatment/product-4",
          },
        ],
      },

      {
        label: "Evaporators",
        href: "/products/evaporator",
        children: [
          {
            label: "Batch Evaporators",
            href: "/products/evaporator/mvr-evaporators",
          },

          {
            label: "Multiple Effect Evaporator",
            href: "/products/evaporator/batch-evaporators2",
          },
          {
            label: " Falling Film",
            href: "/products/evaporator/batch-evaporators3",
          },
          {
            label: "Forced Circulation",
            href: "/products/evaporator/batch-evaporator3s",
          },
          {
            label: "Scraped Surface",
            href: "/products/evaporator/batch-evaporators4",
          },
          {
            label: "Thin Film",
            href: "/products/evaporator/batch-evaporator5s",
          },
          {
            label: "Wiped Film",
            href: "/products/evaporator/batch-evaporator6s",
          },
        ],
      },

      {
        label: "Dryers",
        href: "/products/dryers",
        children: [
          {
            label: "Ring Dryer",
            href: "/1",
          },
          {
            label: "DDGS/ DWGS Dryer",
            href: "/22",
          },
          {
            label: "Spray Dryer",
            href: "/33",
          },
          {
            label: "Flash Dryer Manufacturers",
            href: "/44",
          },
          {
            label: "Fluidized Bed Dryer",
            href: "/55",
          },
          {
            label: "Rotary Bundle Dryer",
            href: "/66",
          },
        ]
      },

      {
        label: "Caustic Recovery Plant",
        href: "/products/caustic-recovery-plant",
      },

      {
        label: "Steam Radiator",
        href: "/products/steam-radiator",
      },

      {
        label: "Induced Draft Fans",
        href: "/products/induced-draft-fans",
      },

      {
        label: "Centrifugal Pumps",
        href: "/products/centrifugal-pumps",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      {
        label: "Food & Beverage",
        href: "/industries/food-beverage",
      },
      {
        label: "Sugar",
        href: "/industries/sugar",
      },
      {
        label: "Starch",
        href: "/industries/starch",
      },
      {
        label: "Distillery",
        href: "/industries/distillery",
      },
      {
        label: "Pulp & Paper",
        href: "/industries/pulp-paper",
      },
      {
        label: "Pharmaceuticals",
        href: "/industries/pharma",
      },
      {
        label: "Chemical",
        href: "/industries/chemical",
      },
      {
        label: "Dairy",
        href: "/industries/dairy",
      },
      {
        label: "Textile",
        href: "/industries/textile",
      },
      {
        label: "Water & Wastewater",
        href: "/industries/wastewater",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    megaMenu: [
      {
        label: "Water Management",
        href: "/projects/water-management",
        children: [
          {
            label: "Zero Liquid Discharge (ZLD) Plant",
            href: "/products/water-management/zero-liquid-discharge",
          },
          {
            label: "Effluent Treatment Plant (ETP)",
            href: "/products/water-management/effluent-treatment-plant",
          },
          {
            label: "Sewage Treatment Plant (STP)",
            href: "/products/water-management/sewage-treatment-plant",
          },
          {
            label: "Industrial RO Plants",
            href: "/products/water-management/industrial-ro-plants",
          },
          {
            label: "Low Energy Consuming ZLD Plant",
            href: "/products/water-management/low-energy-zld",
          },
        ],
      },

      {
        label: "Starch & Derivatives",
        href: "/projects/starch-derivatives",
        children: [
          {
            label: "Rice Based Liquid Glucose Plant",
            href: "/projects/starch-derivatives/rice-based",
          },
          {
            label: "Maize Based Liquid Glucose Plant",
            href: "/projects/starch-derivatives/maize-based",
          },
          {
            label: "Rice & Maize Based Fructose Plant",
            href: "/projects/starch-derivatives/rice-and-maize-based",
          }
        ]
      },
      {
        label: "Egg Powder Plant",
        href: "/projects/egg-powder-plant",
      },

      {
        label: "MVR Evaporators",
        href: "/projects/mvr-evaporators",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      {
        label: "Articles",
        href: "/resources/articles",
      },
      {
        label: "Case Studies",
        href: "/resources/case-studies",
      },
      {
        label: "Brochures",
        href: "/resources/brochures",
      },
      {
        label: "FAQs",
        href: "/resources/faqs",
      },
      {
        label: "Blogs",
        href: "/resources/blogs",
      },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileProductDropdown, setMobileProductDropdown] = useState<string | null>(null);

  /* =====================================================
     SCROLL STATE
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU ON ESCAPE
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =====================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* =====================================================
     MOBILE MENU HELPERS
  ===================================================== */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
    setMobileProductDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((current) =>
      current === label ? null : label
    );
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "bg-white/95 py-2 shadow-lg backdrop-blur-md md:py-3"
        : "bg-transparent py-3 md:py-5"
        }`}
      aria-label="Main navigation"
    >
      {/* =====================================================
          NAVBAR CONTAINER
      ===================================================== */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="MKS Industrial Solutions Home"
        >
          <div className="relative h-[42px] w-[140px] md:h-[48px] md:w-[160px] lg:h-[55px] lg:w-[180px]">
            <Image
              src="/images/mks.png"
              alt="MKS Industrial Solutions"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
            />
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <div className="hidden items-center xl:flex">

          {navItems.map((item) => (
            <div
              key={item.label}
              className="group relative"
            >

              {/* Main Navigation Link */}
              <Link
                href={item.href}
                aria-haspopup={
                  item.dropdown || item.megaMenu
                    ? "menu"
                    : undefined
                }
                className={`flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors ${isScrolled
                  ? "text-[#062B49] hover:text-[#27B3C2]"
                  : "text-white hover:text-[#5DD5DE]"
                  }`}
              >
                {item.label}

                {(item.dropdown || item.megaMenu) && (
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                    className={`transition-transform duration-200 group-hover:rotate-180 ${isScrolled
                      ? "text-[#0A4266]"
                      : "text-white/70"
                      }`}
                  />
                )}
              </Link>


              {/* =====================================================
        NORMAL DROPDOWN
    ===================================================== */}

              {item.dropdown && (
                <div
                  className="
          invisible
          absolute
          left-0
          top-full
          z-50
          w-60
          pt-2
          opacity-0
          transition-all
          duration-200
          group-hover:visible
          group-hover:opacity-100
        "
                >

                  <div className="overflow-hidden rounded-lg border border-slate-100 bg-white py-2 shadow-xl shadow-[#062B49]/10">

                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="group/item flex items-center justify-between px-5 py-3 text-sm text-slate-700 transition-colors hover:bg-[#062B49]/5 hover:text-[#062B49]"
                      >
                        <span>
                          {sub.label}
                        </span>

                        <span className="translate-x-[-4px] text-[#27B3C2] opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100">
                          →
                        </span>
                      </Link>
                    ))}

                  </div>

                </div>
              )}


              {/* =====================================================
        PRODUCTS MEGA MENU
    ===================================================== */}

              {item.megaMenu && (
                <div
                  className="
          invisible
          absolute
          left-1/2
          top-full
          z-50
          w-[760px]
          -translate-x-1/2
          pt-3
          opacity-0
          transition-all
          duration-200
          group-hover:visible
          group-hover:opacity-100
        "
                >

                  <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-xl shadow-[#062B49]/10">

                    <div className="grid grid-cols-3 gap-x-8 gap-y-7">

                      {item.megaMenu.map((group) => (
                        <div key={group.href}>

                          {/* Main Product */}
                          <Link
                            href={group.href}
                            className="text-sm font-semibold text-[#062B49] transition-colors hover:text-[#27B3C2]"
                          >
                            {group.label}
                          </Link>


                          {/* Sub  */}
                          {group.children && (
                            <div className="mt-3 space-y-2">

                              {group.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block text-sm text-slate-500 transition-colors hover:text-[#27B3C2]"
                                >
                                  {child.label}
                                </Link>
                              ))}

                            </div>
                          )}

                        </div>
                      ))}

                    </div>


                    {/* Bottom Link */}
                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <Link
                        href={item.href}
                        className="text-sm font-semibold text-[#27B3C2] transition-colors hover:text-[#062B49]"
                      >
                        View All {item.label} →
                      </Link>
                    </div>

                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

        {/* =====================================================
            DESKTOP CTA
        ===================================================== */}

        <div className="hidden xl:block">

          <Link
            href="/contact"
            className={`inline-flex items-center px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 ${isScrolled
              ? "bg-[#062B49] text-white hover:bg-[#0A4266]"
              : "bg-white text-[#062B49] hover:bg-[#5DD5DE]"
              }`}
          >
            Get a Quote
          </Link>

        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`p-2 transition-colors xl:hidden ${isScrolled
            ? "text-[#062B49]"
            : "text-white"
            }`}
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? (
            <X size={28} strokeWidth={1.8} />
          ) : (
            <Menu size={28} strokeWidth={1.8} />
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[68px] z-50 border-t border-slate-200 bg-white shadow-xl xl:hidden md:top-[76px]"
        >
          <div className="max-h-[calc(100vh-68px)] overflow-y-auto md:max-h-[calc(100vh-76px)]">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 md:py-5">

              {navItems.map((item) => {
                const isOpen = mobileDropdown === item.label;

                // Products uses megaMenu
                const hasMegaMenu =
                  "megaMenu" in item && item.megaMenu;

                // Normal dropdown
                const hasDropdown =
                  "dropdown" in item && item.dropdown;

                const hasChildren = hasMegaMenu || hasDropdown;

                return (
                  <div
                    key={item.label}
                    className="border-b border-slate-100 last:border-b-0"
                  >

                    {/* ==========================================
                  MAIN MOBILE ITEM
              ========================================== */}

                    <div className="flex min-h-[52px] items-center">

                      <Link
                        href={item.href}
                        className="flex-1 py-3 text-[15px] font-medium text-[#062B49]"
                        onClick={() => {
                          if (!hasChildren) {
                            closeMobileMenu();
                          }
                        }}
                      >
                        {item.label}
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() =>
                            toggleMobileDropdown(item.label)
                          }
                          className="flex h-11 w-11 shrink-0 items-center justify-center text-[#062B49]"
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={isOpen}
                        >
                          <ChevronDown
                            size={18}
                            strokeWidth={1.8}
                            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      )}

                    </div>


                    {/* ==========================================
                  NORMAL DROPDOWN
              ========================================== */}

                    {hasDropdown && isOpen && (
                      <div className="mb-2 ml-2 border-l border-[#27B3C2]/30 pl-4">

                        {item.dropdown?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block py-2.5 text-sm text-slate-600 transition-colors hover:text-[#27B3C2]"
                            onClick={closeMobileMenu}
                          >
                            {sub.label}
                          </Link>
                        ))}

                      </div>
                    )}


                    {/* ==========================================
                  PRODUCTS MEGA MENU
              ========================================== */}

                    {hasMegaMenu && isOpen && (
                      <div className="mb-3 ml-2 border-l border-[#27B3C2]/30 pl-4">

                        {item.megaMenu?.map((product) => {
                          const productOpen =
                            mobileProductDropdown === product.label;

                          const hasProductChildren =
                            product.children && product.children.length > 0;

                          return (
                            <div key={product.href}>

                              {/* Product Category */}
                              <div className="flex items-center">

                                <Link
                                  href={product.href}
                                  className="flex-1 py-2.5 text-sm font-medium text-[#062B49]"
                                  onClick={() => {
                                    if (!hasProductChildren) {
                                      closeMobileMenu();
                                    }
                                  }}
                                >
                                  {product.label}
                                </Link>

                                {hasProductChildren && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setMobileProductDropdown(
                                        productOpen ? null : product.label
                                      )
                                    }
                                    className="flex h-10 w-10 items-center justify-center text-slate-500"
                                    aria-label={`Toggle ${product.label} products`}
                                    aria-expanded={productOpen}
                                  >
                                    <ChevronDown
                                      size={16}
                                      className={`transition-transform duration-200 ${productOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                  </button>
                                )}

                              </div>

                              {/* Nested Products */}
                              {hasProductChildren && productOpen && (
                                <div className="mb-2 ml-3 border-l border-slate-200 pl-3">

                                  {product.children?.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="block py-2 text-[13px] text-slate-500 transition-colors hover:text-[#27B3C2]"
                                      onClick={closeMobileMenu}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}

                                </div>
                              )}

                            </div>
                          );
                        })}

                      </div>
                    )}

                  </div>
                );
              })}


              {/* ==========================================
            MOBILE CTA
        ========================================== */}

              <Link
                href="/contact"
                className="mt-5 block bg-[#062B49] px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#0A4266]"
                onClick={closeMobileMenu}
              >
                Get a Quote
              </Link>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}