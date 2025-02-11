import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgIf } from '@angular/common';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { AudioService } from '../../shared/services/audio.service';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('mapState', [
      transition('void => *', [
        animate('2s ease-out', keyframes([
          style({ transform: 'scale(2.5)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 0.5 }),
          style({ transform: 'scale(1.2)', opacity: 0.3, offset: 0.7 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
      ]),
      transition('hidden => visible', [
        animate('2s ease-out', keyframes([
          style({ transform: 'scale(2.5)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 0.5 }),
          style({ transform: 'scale(1.2)', opacity: 0.3, offset: 0.7 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  hasInteracted = false;

  constructor(
    private audioService: AudioService,
    private navigationService: NavigationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {}

  startExperience() {
    if (isPlatformBrowser(this.platformId)) {
      this.hasInteracted = true;
      this.audioService.playStartupSound();
    }
  }

  goHome() {
    this.navigationService.navigateHome();
  }

  async goToCategories() {
    await this.navigationService.navigateWithFade('/categories');
  }
}
