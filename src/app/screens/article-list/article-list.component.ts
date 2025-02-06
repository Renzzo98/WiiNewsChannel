import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { interval, Subscription } from 'rxjs';
import { NavigationService } from '../../shared/services/navigation.service';
import { AudioService } from '../../shared/services/audio.service';
import { ActivatedRoute } from '@angular/router';
import { NewsArticle } from '../../models/news.model';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule],
  providers: [NewsService],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  lastUpdated = new Date();
  currentTime = new Date();
  selectedArticle: string | null = null;
  
  private timeSubscription?: Subscription;

  @Input() articles: NewsArticle[] = [];
  @Input() selectedCategory: string | null = null;

  categoryId: string | null = null;

  constructor(
    private newsService: NewsService,
    private navigationService: NavigationService,
    private audioService: AudioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get category from URL path parameter
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('category');
    });

    // Fetch articles from category
    this.fetchArticlesFromCategory();

    // Update time every second
    this.timeSubscription = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
    this.audioService.playLobbyMusic();
  }

  fetchArticlesFromCategory() {
    if (this.categoryId) {
      this.selectedCategory = this.categoryId;
      this.newsService.getNewsByCategory(this.categoryId).subscribe(
        (articles) => {
          this.articles = articles;
      },
      (error) => {
          console.error('Error fetching news:', error);
        }
      );
    }
  }

  ngOnDestroy() {
    // Clean up subscription when component is destroyed
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  selectArticle(article: NewsArticle) {
    this.selectedArticle = article.uuid;
    const navigationExtras = {
        queryParams: { categoryId: this.categoryId },
        state: { article: article }
    };
    this.navigationService.navigateWithFade(`/article/${article.uuid}`, navigationExtras);
    // this.newsService.getNewsByCategory(categoryId).subscribe(
    //   (articles) => {
    //     console.log(articles);
    //     this.articles = articles;
    //   },
    //   (error) => {
    //     console.error('Error fetching news:', error);
    //   }
    // );
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

  goBack() {
    this.navigationService.navigateWithFade('/categories');
  }

}
