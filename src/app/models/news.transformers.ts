import { NewsArticle, NewsCategory, NewsCacheEntry } from './news.model';

export class NewsTransformer {
  static toArticle(raw: any): NewsArticle {
    return {
      uuid: raw.uuid,
      title: raw.title,
      description: raw.description || '',
      keywords: raw.keywords || '',
      snippet: raw.snippet || raw.description || '',
      url: raw.url,
      image_url: raw.image_url || '',
      language: raw.language || 'en',
      published_at: raw.published_at,
      source: raw.source,
      categories: raw.categories || [],
      locale: raw.locale || 'us',
      similar: raw.similar?.map((s: any) => this.toArticle(s)) || []
    };
  }

  static toCacheEntry(category: string, articles: NewsArticle[]): NewsCacheEntry {
    return {
      category,
      articles,
      lastUpdated: new Date()
    };
  }

  static fromCacheEntry(entry: NewsCacheEntry): NewsCategory {
    return {
      id: entry.category,
      name: entry.category.charAt(0).toUpperCase() + entry.category.slice(1),
      articles: entry.articles,
      lastUpdated: entry.lastUpdated
    };
  }
} 