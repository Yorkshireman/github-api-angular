import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) {}

  getUserData(username) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}
