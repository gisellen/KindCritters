import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAutheticated = true;

  get userIsAutheticated() {
    return this._userIsAutheticated;
  }

  constructor() {}

  login() {
    this._userIsAutheticated = true;
  }

  logout() {
    this._userIsAutheticated = false;
  }
}
