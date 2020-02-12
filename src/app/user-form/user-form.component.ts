import { Component } from '@angular/core';

import { User } from '../user/user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  constructor(private userDataService: UserDataService) {}

  user = new User('', '');

  onSubmit() {
    this.userDataService.getUserData(this.user.username).subscribe((data: any[]) => {
      console.log(data);
      // this.user.avatarUrl = data;
    })
  }

  // remove later
  get diagnostic() {
    return JSON.stringify(this.user);
  }
}
