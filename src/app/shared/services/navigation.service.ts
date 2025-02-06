import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from './audio.service';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  isFading = false;

  constructor(private router: Router, private audioService: AudioService) {}

  async navigateWithFade(path: string) {
    this.isFading = true;
    await new Promise(resolve => setTimeout(resolve, 1000)); // Fade to black
    await this.router.navigate([path]);
    await new Promise(resolve => setTimeout(resolve, 100)); // Small delay
    this.isFading = false; // Fade in new page
  }

  navigateHome() {
    this.audioService.playSelectSound();
    this.navigateWithFade('/');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
} 