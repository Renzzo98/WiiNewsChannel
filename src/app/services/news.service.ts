import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'YOUR_API_KEY'; // Get this from newsapi.org
  private apiUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top-headlines`, {
      params: {
        country: 'us',
        apiKey: this.apiKey
      }
    });
  }

  getNewsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/top-headlines`, {
      params: {
        country: 'us',
        category,
        apiKey: this.apiKey
      }
    });
  }
}