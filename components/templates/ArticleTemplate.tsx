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

      {heroImage ? (
        <div className="relative overflow-hidden">
          {/* Background layer: fills the whole hero window, holds no document space */}
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={heroImage.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/80 via-[#0B0B0F]/65 to-[#0B0B0F]" />
          </div>

          <div className="relative">
            <Breadcrumb items={breadcrumb} />
            <Container className="pt-2 md:pt-4 pb-14 md:pb-20">
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
            </Container>
          </div>
        </div>
      ) : (
        <Breadcrumb items={breadcrumb} />
      )}

      <main className={heroImage ? "pb-section-gap" : "mt-8 pb-section-gap"}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
            <article className="md:col-span-8">
              {!heroImage && (
                <>
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
                </>
              )}

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
