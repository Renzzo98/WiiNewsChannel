import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule, DatePipe } from '@angular/common';
import { WiiBottomBarOverlayComponent } from './wii-bottom-bar-overlay.component';

@Component({
  selector: 'app-wii-bottom-bar',
  standalone: true,
  imports: [CommonModule, DatePipe, WiiBottomBarOverlayComponent],
  templateUrl: './wii-bottom-bar.component.html',
  styleUrls: ['./wii-bottom-bar.component.scss']
})
export class WiiBottomBarComponent implements OnInit, OnDestroy {
  currentTime = new Date();
  private timeInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.timeInterval = setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }
}
