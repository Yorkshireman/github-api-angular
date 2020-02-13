import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject(new User());

  currentUser = this.userSource.asObservable();

  constructor() { }

  changeUser(user: User) {
    this.userSource.next(user);
  }
}
