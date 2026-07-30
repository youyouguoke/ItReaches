import Link from "next/link";
import { Container } from "./Container";

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="pt-8" aria-label="Breadcrumb">
      <Container>
        <ol className="flex items-center gap-2 font-label text-label-caps uppercase text-on-surface-variant">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.title} className="flex items-center gap-2">
                {index > 0 && (
                  <svg
                    className="text-on-surface-variant"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
                {isLast || !item.href ? (
                  <span className={isLast ? "text-on-surface" : ""}>{item.title}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
