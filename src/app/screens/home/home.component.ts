import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { NgIf } from '@angular/common';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { AudioService } from '../../shared/services/audio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('mapState', [
      transition('void => *', [
        animate('2s ease-out', keyframes([
          style({ transform: 'scale(2.5)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 0.5 }),
          // Single strong echo
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
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {}

  startExperience() {
    if (isPlatformBrowser(this.platformId)) {
      this.hasInteracted = true;
      this.audioService.playStartupSound();
    }
  }
}
