import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedIn = authService.checkIfLoggedIn();
    this.authService.onAuthChange.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onLogOut(): void {
    this.authService.logout();
  }
}
