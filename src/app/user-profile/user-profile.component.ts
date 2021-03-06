import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);
  }
}
