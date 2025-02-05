import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.audio = new Audio();
    }
  }

  playStartupSound() {
    if (this.audio && isPlatformBrowser(this.platformId)) {
      this.audio.src = 'assets/audio/startup.mp3';
      this.audio.load();
      this.audio.play().catch(error => {
        console.warn('Audio playback failed:', error);
      });
    }
  }

  stopSound() {
    if (this.audio && isPlatformBrowser(this.platformId)) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
} 