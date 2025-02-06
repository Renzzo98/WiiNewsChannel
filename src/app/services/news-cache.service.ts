import { Injectable } from '@angular/core';
import { NewsCacheEntry, NewsArticle } from '../models/news.model';
import { NewsTransformer } from '../models/news.transformers';

@Injectable({
  providedIn: 'root'
})
export class NewsCacheService {
  private cache = new Map<string, NewsCacheEntry>();
  private readonly CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in ms

  setCacheForCategory(category: string, articles: NewsArticle[]) {
    this.cache.set(
      category, 
      NewsTransformer.toCacheEntry(category, articles)
    );
  }

  getCacheForCategory(category: string): NewsArticle[] | null {
    const entry = this.cache.get(category);
    if (!entry) return null;

    const age = Date.now() - entry.lastUpdated.getTime();
    if (age > this.CACHE_DURATION) {
      this.cache.delete(category);
      return null;
    }

    return entry.articles;
  }

  clearCache() {
    this.cache.clear();
  }

  isCacheValid(category: string): boolean {
    return this.getCacheForCategory(category) !== null;
  }
} 