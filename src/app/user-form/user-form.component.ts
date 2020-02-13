import { Component } from '@angular/core';

import { User } from '../models/user';
import { GithubApiService, UserData } from '../github-api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  constructor(private userDataService: GithubApiService) {}
  user = new User('', '');

  onSubmit() {
    this.userDataService.getUserData(this.user.username)
      .subscribe((data: UserData) => {
        this.user.avatarUrl = data.avatar_url;
      }
    )
  }

  // remove later
  get diagnostic() {
    return JSON.stringify(this.user);
  }
}
