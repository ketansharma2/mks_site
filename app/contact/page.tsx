// app/contact/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Clock3,
  Factory,
  MessageSquare,
} from "lucide-react";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MKS Industrial Solutions",
  description:
    "Contact MKS Industrial Solutions for industrial process engineering, evaporation, drying, water and wastewater, energy and utility solutions.",
  alternates: {
    canonical: "https://mks.co.in/contact",
  },
};
export default function ContactPage() {
  return (
    <main className="bg-white text-slate-700">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#062B49]">

        {/* Background details */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0A4266]/40 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#27B3C2]/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">

          <div className="max-w-3xl">

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Let's Discuss Your
              <span className="block text-[#5DD5DE]">
                Industrial Requirement
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Whether you are planning a new plant, upgrading an existing
              process or looking for a customized engineering solution, our
              team is ready to understand your requirements.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}
      <section className="py-16 md:py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">

          {/* =================================================
              LEFT - CONTACT INFORMATION
          ================================================= */}
          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0A4266]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4266]">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#062B49] md:text-4xl">
              Connect With Our
              <span className="block text-[#0A4266]">
                Engineering Team
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
              Share your project requirements with us. Our engineering team
              can help you evaluate the right process, equipment and solution
              for your application.
            </p>


            {/* Contact details */}
            <div className="mt-9 space-y-6">

              {/* Phone */}
              <a
                href="tel:+911234567890"
                className="group flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 transition-colors group-hover:border-[#27B3C2] group-hover:bg-[#27B3C2]/10">
                  <Phone
                    size={19}
                    className="text-[#0A4266]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#062B49] group-hover:text-[#0A4266]">
                    +91 12345 67890
                  </p>
                </div>
              </a>


              {/* Email */}
              <a
                href="mailto:sales@mks.co.in"
                className="group flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 transition-colors group-hover:border-[#27B3C2] group-hover:bg-[#27B3C2]/10">
                  <Mail
                    size={19}
                    className="text-[#0A4266]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#062B49] group-hover:text-[#0A4266]">
                    sales@mks.co.in
                  </p>
                </div>
              </a>


              {/* Address */}
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 bg-slate-50">
                  <MapPin
                    size={19}
                    className="text-[#0A4266]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Office & Works
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Manana Road, Samalkha,
                    <br />
                    District Panipat, Haryana,
                    <br />
                    India – 132101
                  </p>
                </div>

              </div>


              {/* Working hours */}
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 bg-slate-50">
                  <Clock3
                    size={19}
                    className="text-[#0A4266]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>

              </div>

            </div>


            {/* Small trust block */}
            <div className="mt-10 border-l-2 border-[#27B3C2] bg-slate-50 px-5 py-4">

              <p className="text-sm font-semibold leading-6 text-[#062B49]">
                Engineering • EPC • Process Solutions
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Customized solutions for process, utility and industrial
                requirements.
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT - FORM
          ================================================= */}
          <div className="border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(6,43,73,0.07)] md:p-8 lg:p-10">

            <div className="mb-8 flex items-start justify-between gap-5">

              <div>

                <div className="mb-3 flex items-center gap-3">
                  <MessageSquare
                    size={19}
                    className="text-[#27B3C2]"
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A4266]">
                    Business Enquiry
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#062B49] md:text-3xl">
                  Tell Us About Your Project
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Provide a few details and our team will get back to you.
                </p>

              </div>

              <Factory
                size={32}
                strokeWidth={1.2}
                className="hidden text-[#0A4266]/30 sm:block"
              />

            </div>


            {/* =================================================
                FORM
            ================================================= */}
            <form
              action="/api/contact"
              method="POST"
              className="space-y-5"
            >

              {/* Name */}
              <div className="grid gap-5 sm:grid-cols-2">

                <FormField
                  label="First Name"
                  name="firstName"
                  placeholder="First name"
                  required
                />

                <FormField
                  label="Last Name"
                  name="lastName"
                  placeholder="Last name"
                  required
                />

              </div>


              {/* Email + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                />

              </div>


              {/* Company */}
              <FormField
                label="Company"
                name="company"
                placeholder="Company name"
              />


              {/* Subject */}
              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#062B49]"
                >
                  Enquiry Type
                </label>

                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#27B3C2] focus:ring-1 focus:ring-[#27B3C2]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>
                  <option value="Project Enquiry">
                    Project Enquiry
                  </option>
                  <option value="Product Enquiry">
                    Product Enquiry
                  </option>
                  <option value="Engineering Services">
                    Engineering Services
                  </option>
                  <option value="EPC Requirement">
                    EPC Requirement
                  </option>
                  <option value="General Enquiry">
                    General Enquiry
                  </option>
                </select>

              </div>


              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#062B49]"
                >
                  Project / Requirement
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your process, project or industrial requirement..."
                  className="w-full resize-none border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#27B3C2] focus:ring-1 focus:ring-[#27B3C2]"
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#062B49] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#0A4266]"
              >
                Submit Enquiry

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>


              <p className="text-center text-[11px] leading-5 text-slate-400">
                Your information will only be used to respond to your enquiry.
              </p>

            </form>

          </div>

        </div>
      </section>


      {/* =====================================================
          ENGINEERING CTA
      ===================================================== */}
      <section className="border-t border-white/10 bg-[#062B49]">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5DD5DE]">
              Need a Customized Solution?
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Let's engineer the right solution for your process.
            </h2>

          </div>

          <Link
            href="/solutions"
            className="group inline-flex shrink-0 items-center gap-3 border border-white/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-[#27B3C2] hover:bg-[#27B3C2]/10"
          >
            Explore Our Solutions

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

      </section>


      {/* =====================================================
    OUR LOCATIONS
===================================================== */}
<section className="bg-slate-50 py-16 md:py-20 lg:py-24">

<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

  {/* Section Heading */}
  <div className="mb-10 max-w-2xl">

    <div className="mb-3 flex items-center gap-3">
      <span className="h-px w-10 bg-[#0A4266]" />

      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4266]">
        Our Locations
      </span>
    </div>

    <h2 className="text-3xl font-bold text-[#062B49] md:text-4xl">
      Find MKS
      <span className="text-[#0A4266]"> Near You</span>
    </h2>

    <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
      Connect with our team at our office and manufacturing facility.
    </p>

  </div>


  {/* Locations */}
  <div className="grid gap-7 lg:grid-cols-2">

    {/* =================================================
        HEAD OFFICE
    ================================================= */}
    <div className="overflow-hidden border border-slate-200 bg-white">

      <div className="p-6 md:p-7">

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#27B3C2]">
              Corporate Office
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#062B49]">
              Head Office
            </h3>

          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#062B49]">
            <MapPin
              size={18}
              className="text-[#5DD5DE]"
            />
          </div>

        </div>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          MKS Industrial Solutions
          <br />
          Manana Road, Samalkha,
          <br />
          District Panipat, Haryana,
          <br />
          India – 132101
        </p>

      </div>


      {/* Google Map */}
      <div className="h-[280px] w-full border-t border-slate-200">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.015021618245!2d76.9922032749801!3d29.2564840554744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc5ae6031269d%3A0xc93a6399f41e1b3e!2sMKS%20INDUSTRIAL%20SOLUTIONS!5e1!3m2!1sen!2sin!4v1787397105088!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

      </div>

    </div>


    {/* =================================================
        MANUFACTURING FACILITY
    ================================================= */}
    <div className="overflow-hidden border border-slate-200 bg-white">

      <div className="p-6 md:p-7">

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#27B3C2]">
              Manufacturing Facility
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#062B49]">
              Manufacturing Office
            </h3>

          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#062B49]">
            <Factory
              size={18}
              className="text-[#5DD5DE]"
            />
          </div>

        </div>

        <p className="mt-5 text-sm leading-6 text-slate-600">
          MKS Industrial Solutions
          <br />
          Manufacturing & Engineering Facility
          <br />
          Samalkha, Panipat, Haryana,
          <br />
          India
        </p>

      </div>


      {/* Google Map */}
      <div className="h-[280px] w-full border-t border-slate-200">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.015021618245!2d76.9922032749801!3d29.2564840554744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc5ae6031269d%3A0xc93a6399f41e1b3e!2sMKS%20INDUSTRIAL%20SOLUTIONS!5e1!3m2!1sen!2sin!4v1787397105088!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

      </div>

    </div>

  </div>

</div>

</section>

    </main>
  );
}


/* =============================================================
   FORM FIELD
============================================================= */

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#062B49]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#27B3C2]">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#27B3C2] focus:ring-1 focus:ring-[#27B3C2]"
      />

    </div>
  );
}