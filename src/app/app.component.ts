import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'ECommerceWeb';

  constructor(private router: Router) { }

  logout() {
    this.router.navigateByUrl('login');
  }
}

