import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, catchError } from 'rxjs';
import { NewsArticle, NewsResponse, NewsValidator } from '../models/news.model';
import { NewsTransformer } from '../models/news.transformers';
import { NewsCacheService } from './news-cache.service';
import { MOCK_NEWS } from './mock-news.data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'YOUR_API_KEY'; // Get this from newsapi.org
  private apiUrl = 'https://newsapi.org/v2';

  constructor(
    private http: HttpClient,
    private cacheService: NewsCacheService
  ) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top-headlines`, {
      params: {
        country: 'us',
        apiKey: this.apiKey
      }
    });
  }

  getNewsByCategory(category: string): Observable<NewsArticle[]> {
    //  // Check cache first
    //  const cached = this.cacheService.getCacheForCategory(category);
    //  if (cached) return of(cached);
 
    //  return this.http.get<NewsResponse>(this.apiUrl).pipe(
    //    map(response => {
    //      if (!NewsValidator.isValidResponse(response)) {
    //        throw new Error('Invalid API response');
    //      }
    //      const articles = response[category]?.map(a => NewsTransformer.toArticle(a)) || [];
    //      this.cacheService.setCacheForCategory(category, articles);
    //      return articles;
    //    }),
    //    catchError(error => {
    //      console.error('News API error:', error);
    //      return [];
    //    })
    // Use mock data instead of HTTP request
    return of(MOCK_NEWS[category] || []).pipe(
      map(articles => articles.map(a => NewsTransformer.toArticle(a)))
    );
  }
}