export interface NewsArticle {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  locale: string;
  similar?: NewsArticle[];
}

export interface NewsCategory {
  id: string;
  name: string;
  articles: NewsArticle[];
  lastUpdated: Date;
}

export interface NewsResponse {
  [category: string]: NewsArticle[];
}

// For Firebase storage
export interface NewsCacheEntry {
  category: string;
  articles: NewsArticle[];
  lastUpdated: Date;
}

export class NewsValidator {
  static isValidArticle(article: any): article is NewsArticle {
    return (
      typeof article.uuid === 'string' &&
      typeof article.title === 'string' &&
      typeof article.description === 'string' &&
      typeof article.url === 'string' &&
      typeof article.published_at === 'string' &&
      Array.isArray(article.categories)
    );
  }

  static isValidResponse(response: any): response is NewsResponse {
    if (typeof response !== 'object') return false;
    return Object.values(response).every(articles => 
      Array.isArray(articles) && 
      articles.every(article => this.isValidArticle(article))
    );
  }
} 