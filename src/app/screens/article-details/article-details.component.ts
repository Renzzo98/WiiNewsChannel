import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { interval, Subscription } from 'rxjs';
import { NavigationService } from '../../shared/services/navigation.service';
import { AudioService } from '../../shared/services/audio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsArticle } from '../../models/news.model';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule],
  providers: [NewsService],
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {

  lastUpdated = new Date();
  currentTime = new Date();
  selectedArticle: NewsArticle | null = null;
  
  private timeSubscription?: Subscription;

  article: NewsArticle | null = null;
  categoryId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationService,
    private audioService: AudioService
  ) {
    // Get the article from navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.article = navigation.extras.state['article'];
    }
  }

  ngOnInit() {
    console.log('ArticleDetailsComponent ngOnInit');
    console.log(this.route.queryParams);
    // Get categoryId from query params
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
      console.log('Category ID from query params:', this.categoryId);
    });

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

  getFormattedTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    });
  }

  getTimeSinceUpdate(publishedAt: string): string {
    const publishedDate = new Date(publishedAt);
    const diff = Math.floor((new Date().getTime() - publishedDate.getTime()) / 1000 / 60);
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ago`;
  }

  goBack() {
    this.navigationService.navigateWithFade(`/categories/${this.categoryId}`);
  }

}
