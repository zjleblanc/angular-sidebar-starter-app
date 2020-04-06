import { IUser } from './../../resources/user.resources';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
    }, error => this.users = [])
  }

  ngOnInit() { }

}
