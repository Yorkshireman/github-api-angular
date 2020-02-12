import { Component } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = new User('');

  onSubmit() {
    console.log('onSubmit(), user.username: ', this.user.username);
  }

  // remove later
  get diagnostic() {
    return JSON.stringify(this.user);
  }
}
