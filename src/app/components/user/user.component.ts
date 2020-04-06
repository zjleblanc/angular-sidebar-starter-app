import { UserService } from './../../services/user.service';
import { IUser } from './../../resources/user.resources';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: IUser;
  private sub: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.user = this.userService.getUser(+params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
