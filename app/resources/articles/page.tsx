import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { articles } from "@/app/data/articles";

export const metadata = {
  title: "Technical Articles | MKS Industrial Solutions",
  description:
    "Explore technical articles from MKS Industrial Solutions covering water treatment, evaporation, ZLD, energy efficiency and industrial process engineering.",
};

export default function ArticlesPage() {
  return (
    <main className="bg-white text-slate-700">
      {/* HERO */}
      <section className="bg-[#062B49]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5DD5DE]">
              MKS Knowledge
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
              Technical
              <span className="text-[#5DD5DE]"> Articles</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Technical insights and engineering knowledge covering
              industrial water treatment, evaporation, energy efficiency
              and process engineering.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#27B3C2]">
              Engineering Knowledge
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#062B49] md:text-3xl">
              Explore Our Technical Articles
            </h2>
          </div>

          {articles.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">
              <h3 className="text-xl font-bold text-[#062B49]">
                Articles Coming Soon
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Technical articles and engineering insights will be
                published here soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ArticleCard({
  article,
}: {
  article: (typeof articles)[number];
}) {
  return (
    <Link
    href={`/resources/articles/${article.slug}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#27B3C2]">
          {article.category}
        </p>

        <h3 className="mt-3 text-xl font-bold leading-tight text-[#062B49]">
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
          {article.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            {article.date}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {article.readTime}
          </span>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#062B49]">
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}