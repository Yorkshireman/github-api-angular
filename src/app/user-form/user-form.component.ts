import { Component } from '@angular/core';

import { GithubApiService, UserData } from '../github-api.service';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  user = new User();

  constructor(
    private githubApiService: GithubApiService,
    private userService: UserService
  ) {}

  onSubmit() {
    this.githubApiService.getUserData(this.user.login)
      .subscribe((data: UserData) => {
        this.user = {
          ...data,
          login: this.user.login
        };

        this.userService.changeUser(this.user);
      }
    )
  }
}
