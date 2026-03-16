import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-wii-bottom-bar-overlay',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './wii-bottom-bar-overlay.component.html',
  styleUrls: ['./wii-bottom-bar-overlay.component.scss']
})
export class WiiBottomBarOverlayComponent implements OnInit {
  @Input() currentTime: Date = new Date();
  isMobile = false;

  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
}
