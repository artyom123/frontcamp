export interface News {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: { id: string; name: string; };
  title: string | null;
  url: string | null;
  urlToImage: string | null;
}
