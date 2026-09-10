import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
} from "lucide-react";

import { articles } from "../../../data/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* -------------------------------------------------------
   Static Article Routes
------------------------------------------------------- */

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/* -------------------------------------------------------
   Dynamic SEO Metadata
------------------------------------------------------- */

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found | MKS Industrial Solutions",
    };
  }

  return {
    title: `${article.title} | MKS Industrial Solutions`,

    description: article.description,

    keywords: [
      article.title,
      article.category,
      "MKS Industrial Solutions",
      "industrial engineering",
      "process engineering",
    ],

    alternates: {
        canonical: `/resources/articles/${article.slug}`,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
  };
}

/* -------------------------------------------------------
   Page
------------------------------------------------------- */

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  /* -------------------------------------------------------
     Related Articles
  ------------------------------------------------------- */

  const relatedArticles = articles
    .filter(
      (item) =>
        item.slug !== article.slug &&
        item.category === article.category
    )
    .slice(0, 3);

  /* -------------------------------------------------------
     Article Schema
  ------------------------------------------------------- */

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: article.title,

    description: article.description,

    image: article.image,

    datePublished: article.date,

    author: {
      "@type": "Organization",
      name: "MKS Industrial Solutions",
    },

    publisher: {
      "@type": "Organization",
      name: "MKS Industrial Solutions",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
     "@id": `/resources/articles/${article.slug}`,
    },
  };

  return (
    <main className="bg-white text-slate-700">
      {/* ---------------------------------------------------
          HERO
      --------------------------------------------------- */}

      <section className="bg-[#062B49]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 md:py-28 lg:px-8">
          <Link
           href="/resources/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5DD5DE] transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5DD5DE]">
              {article.category}
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
              {article.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-white/50 sm:text-sm">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {article.date}
              </span>

              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>

              <span>MKS Industrial Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------
          ARTICLE CONTENT
      --------------------------------------------------- */}

      <article className="px-5 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Featured Image */}

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Body */}

          <div className="mt-10">
            {article.content.map((section, index) => (
              <section
                key={`${section.heading}-${index}`}
                className="mb-10"
              >
                <h2 className="text-2xl font-bold leading-tight text-[#062B49] md:text-3xl">
                  {section.heading}
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {section.text}
                </p>
              </section>
            ))}
          </div>

          {/* ------------------------------------------------
              CTA
          ------------------------------------------------ */}

          <div className="mt-14 rounded-2xl bg-[#062B49] p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5DD5DE]">
              MKS Engineering
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              Have a Similar Plant Requirement?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
              Discuss your industrial process, water treatment,
              evaporation or plant optimization requirements with
              MKS Industrial Solutions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/mks-intelligence/plant-assessment"
                className="inline-flex items-center gap-2 rounded-lg bg-[#27B3C2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5DD5DE]"
              >
                Assess Your Plant
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact MKS
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* ---------------------------------------------------
          RELATED ARTICLES
      --------------------------------------------------- */}

      {relatedArticles.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 px-5 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#27B3C2]">
              Continue Reading
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#062B49] md:text-3xl">
              Related Articles
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/resources/articles/${related.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#27B3C2]">
                    {related.category}
                  </p>

                  <h3 className="mt-3 text-lg font-bold leading-tight text-[#062B49]">
                    {related.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                    {related.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#062B49]">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------
          JSON-LD
      --------------------------------------------------- */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
    </main>
  );
}