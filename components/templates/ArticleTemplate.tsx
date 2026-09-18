import { Breadcrumb, BreadcrumbItem } from "@/components/layout/Breadcrumb";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { TrustBlock } from "@/components/article/TrustBlock";
import { TOC, TOCItem } from "@/components/article/TOC";
import { FAQ, FAQItem } from "@/components/article/FAQ";
import { RelatedGuide, Guide } from "@/components/article/RelatedGuide";
import { Container } from "@/components/layout/Container";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Article } from "@/types/article";
import Image from "next/image";

interface ArticleTemplateProps {
  article: Article;
  breadcrumb: BreadcrumbItem[];
  toc: TOCItem[];
  faq: FAQItem[];
  related: Guide[];
  children: React.ReactNode;
  verification?: "verified" | "community" | "unverified";
  heroImage?: { src: string; alt: string };
}

export function ArticleTemplate({
  article,
  breadcrumb,
  toc,
  faq,
  related,
  children,
  verification = "unverified",
  heroImage,
}: ArticleTemplateProps) {
  return (
    <>
      <ArticleSchema article={article} />
      {faq.length > 0 && <FAQSchema items={faq} />}
      <BreadcrumbSchema items={breadcrumb} />

      <Breadcrumb items={breadcrumb} />

      {heroImage && (
        <div
          className="relative mt-4 h-52 w-full overflow-hidden sm:h-64 md:h-80"
          role="img"
          aria-label={heroImage.alt}
        >
          <Image
            src={heroImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        </div>
      )}

      <main className="mt-8 pb-section-gap">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
            <article className="md:col-span-8">
              <ArticleHeader
                title={article.title}
                description={article.description}
                publishedDate={article.publishedDate}
                updatedDate={article.updatedDate}
                lastReviewed={article.lastReviewed}
                readingTime={article.readingTime}
                difficulty={article.difficulty}
                author={article.author}
                verification={verification}
                status={article.status}
              />

              <TrustBlock
                lastReviewed={article.lastReviewed || article.updatedDate || article.publishedDate}
                verification={verification}
              />

              {children}
            </article>

            <aside className="md:col-span-4 relative hidden md:block">
              <TOC items={toc} />
            </aside>
          </div>

          <RelatedGuide guides={related} />
          <FAQ items={faq} />
        </Container>
      </main>
    </>
  );
}
