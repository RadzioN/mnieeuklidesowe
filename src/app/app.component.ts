import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, RouterOutlet } from '@angular/router';
import { fader } from './shared/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
  ]
})
export class AppComponent {
  title = 'mnieeuklidesowe';
  articleCode: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes("/article")) {
          this.articleCode = event.url.substring(9, event.url.length);
        } else {
          this.articleCode = '';
        }
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['depth'];
  }
}
