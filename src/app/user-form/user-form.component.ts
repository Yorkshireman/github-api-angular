import { Component } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = new User('');
  submitted = false;

  onSubmit() {
    console.log('onSubmit()');
    this.submitted  = true;
  }

  // get diagnostic() { return JSON.stringify(this.user); } // remove later
}
