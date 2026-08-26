import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogs } from "../../../data/blogs"

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;

    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="bg-white">

            {/* Hero */}
            <section className="bg-[#062B49] py-20 lg:py-28">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">

                    <Link
                        href="/resources/blogs"
                        className="inline-flex items-center gap-2 text-sm text-[#5DD5DE]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blogs
                    </Link>

                    <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-[#5DD5DE]">
                        {blog.category}
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
                        {blog.title}
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                        {blog.description}
                    </p>

                    <p className="mt-6 text-sm text-white/50">
                        {blog.date} · {blog.readTime}
                    </p>

                </div>
            </section>

            {/* Image + Content */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">

                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="aspect-[16/9] w-full rounded-2xl object-cover"
                    />

                    <article className="mt-12 space-y-10">
                        {blog.content.map((section) => (
                            <div key={section.heading}>
                                <h2 className="text-2xl font-semibold text-[#062B49]">
                                    {section.heading}
                                </h2>

                                <p className="mt-4 leading-8 text-slate-600">
                                    {section.text}
                                </p>
                            </div>
                        ))}
                    </article>

                </div>
            </section>

            {/* CTA */} 
            <section className="mx-auto w-full max-w-5xl shadow-2xl rounded-3xl shadow-[#062B49] bg-white py-16 text-center mb-8">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                        <div>
                            <h2 className="text-2xl font-semibold text-[#062B49]">
                                Have a similar process challenge?
                            </h2>

                            <p className="mt-2 text-[#062B49]/60">
                                Talk to the MKS engineering team.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#27B3C2] px-5 py-3 text-sm font-semibold text-white"
                        >
                            Contact MKS
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                    </div>

                </div>
            </section>

        </main>
    );
}