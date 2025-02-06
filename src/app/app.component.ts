import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public navigationService: NavigationService) {}

  get isFading() {
    return this.navigationService.isFading;
  }
}
