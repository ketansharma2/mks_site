import Link from "next/link";
import {
    ArrowRight,
    CalendarDays,
    Clock3,
    BookOpen,
} from "lucide-react";

const blogs = [
    {
        slug: "how-industries-can-improve-water-recovery",
        title: "How Industries Can Improve Water Recovery",
        description:
            "Practical considerations for improving water recovery and minimizing industrial wastewater.",
        category: "Water Treatment",
        date: "August 26, 2026",
        readTime: "6 min read",
        image: "/images/resource/blogs/frame1.png",
    },
    {
        slug: "role-of-energy-audits-in-industrial-plants",
        title: "The Role of Energy Audits in Industrial Plants",
        description:
            "How process and utility audits can identify opportunities for energy and operational improvements.",
        category: "Energy & Efficiency",
        date: "August 20, 2026",
        readTime: "5 min read",
        image: "/images/resource/blogs/frame2.png",
    },
    {
        slug: "industrial-water-recovery-strategies",
        title: "Industrial Water Recovery Strategies",
        description:
            "Understanding practical approaches to improving water reuse and reducing wastewater generation.",
        category: "Water Treatment",
        date: "August 14, 2026",
        readTime: "7 min read",
        image: "/images/resource/blogs/frame3.png",
    },
    {
        slug: "optimizing-industrial-evaporation-processes",
        title: "Optimizing Industrial Evaporation Processes",
        description:
            "Key considerations for improving evaporation performance, reliability and energy efficiency.",
        category: "Evaporation",
        date: "August 8, 2026",
        readTime: "6 min read",
        image: "/images/resource/blogs/frame4.png",
    },
    {
        slug: "reducing-industrial-water-consumption",
        title: "Reducing Industrial Water Consumption",
        description:
            "Practical approaches industries can use to reduce freshwater consumption and improve process efficiency.",
        category: "Sustainability",
        date: "August 2, 2026",
        readTime: "5 min read",
        image: "/images/resource/blogs/frame5.png",
    },
    {
        slug: "why-process-consultancy-matters",
        title: "Why Process Consultancy Matters",
        description:
            "How engineering consultancy can help industries make better technology and investment decisions.",
        category: "Engineering",
        date: "July 28, 2026",
        readTime: "5 min read",
        image: "/images/resource/blogs/frame6.png",
    },
];

export default function BlogPage() {
    return (
        <main className="bg-white">

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#062B49] py-24 lg:py-32">
              

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">

                       

                        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                            Industrial insights for
                            <span className="block text-[#5DD5DE]">
                                better decisions.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                            Explore practical insights, engineering perspectives
                            and industry knowledge from MKS Industrial Solutions.
                        </p>

                    </div>
                </div>
            </section>


            {/* =====================================================
                FEATURED BLOG
            ===================================================== */}
            <section className="py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mb-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#27B3C2]">
                            Featured
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-[#062B49] md:text-4xl">
                            Latest from MKS
                        </h2>
                    </div>

                    <Link
                        href={`/resources/blogs/${blogs[0].slug}`}
                        className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 lg:grid-cols-2"
                    >

                        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                            <img
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#062B49]">
                                {blogs[0].category}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-14">

                            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
                                <span className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4" />
                                    {blogs[0].date}
                                </span>

                                <span className="flex items-center gap-2">
                                    <Clock3 className="h-4 w-4" />
                                    {blogs[0].readTime}
                                </span>
                            </div>

                            <h3 className="mt-5 text-2xl font-semibold leading-tight text-[#062B49] md:text-3xl">
                                {blogs[0].title}
                            </h3>

                            <p className="mt-5 max-w-xl leading-7 text-slate-600">
                                {blogs[0].description}
                            </p>

                            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#27B3C2]">
                                Read Article
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>

                        </div>
                    </Link>

                </div>
            </section>


            {/* =====================================================
                ALL BLOGS
            ===================================================== */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#27B3C2]">
                                Insights
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold text-[#062B49] md:text-4xl">
                                Explore our blogs
                            </h2>
                        </div>

                    </div>


                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {blogs.slice(1).map((blog) => (
                            <Link
                                key={blog.slug}
                                href={`/resources/blogs/${blog.slug}`}
                                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >

                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden">

                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#062B49]">
                                        {blog.category}
                                    </div>

                                </div>


                                {/* Content */}
                                <div className="p-6">

                                    <div className="flex items-center gap-4 text-xs text-slate-500">

                                        <span className="flex items-center gap-1.5">
                                            <CalendarDays className="h-3.5 w-3.5" />
                                            {blog.date}
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <Clock3 className="h-3.5 w-3.5" />
                                            {blog.readTime}
                                        </span>

                                    </div>


                                    <h3 className="mt-4 text-xl font-semibold leading-snug text-[#062B49] transition-colors group-hover:text-[#27B3C2]">
                                        {blog.title}
                                    </h3>


                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                                        {blog.description}
                                    </p>


                                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#27B3C2]">
                                        Read More
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>
            </section>


            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#062B49] py-20 lg:py-24">

                <div className="absolute left-0 top-0 h-full w-1 bg-[#27B3C2]" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

                        <div className="max-w-2xl">

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
                                Work With MKS
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
                                Have a process challenge?
                            </h2>

                            <p className="mt-4 leading-7 text-white/60">
                                Talk to our engineering team about your process,
                                project requirements or industrial application.
                            </p>

                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#27B3C2] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5DD5DE] hover:text-[#062B49]"
                        >
                            Talk to Our Engineers
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                    </div>

                </div>
            </section>

        </main>
    );
}