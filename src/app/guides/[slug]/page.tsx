import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { guides, getGuide } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return { title: "Guide" };
  return { title: g.title, description: g.excerpt };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  return (
    <>
      <SiteNav />
      <div className="page wrap">
        <div className="crumb">
          <a href="/">Rankings</a> / <a href="/guides">Guides</a> / {g.title}
        </div>
        <h1>{g.title}</h1>
        <div className="article-meta" style={{ marginTop: 16 }}>
          <span>{g.minutes} min read</span>
          <span>Updated {g.updated}</span>
        </div>
        <div className="prose">
          {g.body.map((b, i) =>
            b.type === "h2" ? <h2 key={i}>{b.text}</h2> : <p key={i}>{b.text}</p>
          )}
        </div>
        <p className="method" style={{ marginTop: 30 }}>
          See how these factors feed the ranking on our{" "}
          <a href="/methodology">methodology page</a>, or{" "}
          <a href="/">view the full rankings</a>.
        </p>
      </div>
      <SiteFooter />
    </>
  );
}
