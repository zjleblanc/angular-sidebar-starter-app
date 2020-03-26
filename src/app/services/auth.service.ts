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
    var authStatus = JSON.parse(sessionStorage.getItem("authStatus"));
    this.loggedIn = authStatus == null ? false : authStatus;
  }

  login(): void {
    this.loggedIn = true;
    sessionStorage.setItem("authStatus", "true");

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
    sessionStorage.setItem("authStatus", "false");
    this.onAuthChange.emit(false)
    this.router.navigate(['home']);
  }

  checkIfLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUser(): IUser {
    return this.user;
  }

}
