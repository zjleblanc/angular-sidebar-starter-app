import { environment } from './../../environments/environment';
import { IUser } from './../resources/user.resources';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const users = [
  {
    id: 1,
    name: 'Roger Woods',
    lastLogin: new Date()
  },
  {
    id: 2,
    name: 'Perry Anderson',
    lastLogin: new Date()
  },
  {
    id: 3,
    name: 'Frederick Sharp',
    lastLogin: new Date()
  },
  {
    id: 4,
    name: 'Peggy Barber',
    lastLogin: new Date()
  },
  {
    id: 5,
    name: 'Clint Butler',
    lastLogin: new Date()
  }
]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    let response = new Observable<IUser[]>(subscriber => {
      subscriber.next(users);
    });
    return response;
  }

  getUser(id): IUser {
    return users[id-1];
  }

}
