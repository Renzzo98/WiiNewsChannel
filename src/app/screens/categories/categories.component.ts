import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { interval, Subscription } from 'rxjs';
import { NavigationService } from '../../shared/services/navigation.service';
import { AudioService } from '../../shared/services/audio.service';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  providers: [NewsService],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories = [
    { id: 'business', name: 'Business' },
    { id: 'entertainment', name: 'Entertainment' },
    { id: 'general', name: 'General' },
    { id: 'health', name: 'Health' },
    { id: 'science', name: 'Science' },
    { id: 'sports', name: 'Sports' },
    { id: 'technology', name: 'Technology' }
  ];

  lastUpdated = new Date();
  currentTime = new Date();
  private timeSubscription?: Subscription;

  selectedCategory: string | null = null;
  articles: any[] = [];

  constructor(
    private newsService: NewsService,
    private navigationService: NavigationService,
    private audioService: AudioService
  ) {}

  ngOnInit() {
    // Update time every second
    this.timeSubscription = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
    this.audioService.playLobbyMusic();
  }

  ngOnDestroy() {
    // Clean up subscription when component is destroyed
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    this.newsService.getNewsByCategory(categoryId).subscribe(
      (articles) => {
        console.log(articles);
        this.articles = articles;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

  getFormattedTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    });
  }

  getTimeSinceUpdate(): string {
    const diff = Math.floor((new Date().getTime() - this.lastUpdated.getTime()) / 1000 / 60);
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ago`;
  }

  goHome() {
    this.navigationService.navigateHome();
  }

}
