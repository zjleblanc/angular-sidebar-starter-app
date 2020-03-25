import { Router } from '@angular/router';
import { IUser } from './../resources/user.resources';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() onAuthChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private loggedIn: boolean;
  private user: IUser;

  constructor(private router: Router) {
    this.loggedIn = false;
  }

  login(): void {
    this.loggedIn = true;

    this.user = {
      name: "Demo User",
      lastLogin: new Date()
    }

    this.router.navigate(['dashboard']);
    this.onAuthChange.emit(true)
  }

  logout(): void {
    this.user = undefined;
    this.loggedIn = false;
    this.router.navigate(['home']);
    this.onAuthChange.emit(false)
  }

  checkIfLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUser(): IUser {
    return this.user;
  }

}
