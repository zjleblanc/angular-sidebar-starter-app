import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.isLoggedIn = authService.checkIfLoggedIn();
  }

  ngOnInit(): void {
    this.authService.onAuthChange.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onLogOut(): void {
    this.authService.logout();
  }
}
