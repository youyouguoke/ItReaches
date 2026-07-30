export interface Article {
  title: string;
  description: string;
  href: string;
  publishedDate: string;
  updatedDate?: string;
  author?: string;
  readingTime?: string;
  difficulty?: string;
  lastReviewed?: string;
  sources?: string[];
  status?: "inProgress" | "complete" | "stub";
}
