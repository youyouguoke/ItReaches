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

interface ArticleTemplateProps {
  article: Article;
  breadcrumb: BreadcrumbItem[];
  toc: TOCItem[];
  faq: FAQItem[];
  related: Guide[];
  children: React.ReactNode;
}

export function ArticleTemplate({
  article,
  breadcrumb,
  toc,
  faq,
  related,
  children,
}: ArticleTemplateProps) {
  return (
    <>
      <ArticleSchema article={article} />
      {faq.length > 0 && <FAQSchema items={faq} />}
      <BreadcrumbSchema items={breadcrumb} />

      <Breadcrumb items={breadcrumb} />

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
                verified
                status={article.status}
              />

              <TrustBlock lastReviewed={article.lastReviewed || article.updatedDate || article.publishedDate} />

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
