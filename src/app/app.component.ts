import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  template: `
    <h1>{{ title }}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">heroes</a>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  title = 'tour of heroes';

}
