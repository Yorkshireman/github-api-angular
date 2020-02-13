import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  avatar_url: string;
}

@Injectable({ providedIn: 'root' })
export class GithubApiService {
  apiURL: string = 'https://api.github.com';
  constructor(private httpClient: HttpClient) {}

  getUserData(username) {
    return this.httpClient.get(`${this.apiURL}/users/${username}`);
  }
}
