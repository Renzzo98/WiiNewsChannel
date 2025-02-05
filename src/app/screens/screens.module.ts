import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensRoutingModule } from './screens-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { GlobeComponent } from './globe/globe.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    ScreensRoutingModule,
    HomeComponent,
    CategoriesComponent,
    NewsArticleComponent,
    GlobeComponent,
    SettingsComponent
  ]
})
export class ScreensModule { }
