import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../../shared/app.config';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getFromLocalStorage, setToLocalStorage, removeFromLocalStorage } from '../../shared/utils/local-storage';

@Injectable()
export class AuthService {


  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;
  isLoggedIN = new BehaviorSubject(false);
  constructor(
    private http: HttpClient,
  ) {

  }

  signInUser(email: string, password: string): Observable<any> {
    return this.http.post(this.urlOnlyForOauth, {
      user_name: email,
      user_password: password
    });
  }

  recoveryPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-link-reset-password`, {
      email: email,
    });
  }

  newPassword(password: string, key: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password-by-link`, {
      password: password,
      key: key
    });
  }

  signUpUser(user): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  addData(url: string, body): Observable<any> {
    return this.http.post('/' + url, body);
  }

  signOutUser(): Observable<any> {
    const body = {

    };

    return this.http.post(`${this.urlOnlyForOauth}/revoke`, body);
  }

  get isLogged() {
    // const helper = new JwtHelperService();
    // const auth: any = getFromLocalStorage('MEDNEON_AUTH');
    // if (auth && !helper.isTokenExpired(auth.token)) {
    //   return true;
    // }
    // removeFromLocalStorage(['GLOBE_AUTH', 'MEDNEON_USER']);
    return false;
  }

  forgotPassword(email: string): Observable<any> {
    console.log(email);
    return this.http.post(`${this.apiUrl}/users/forgotpassword`, {
      email: email,
    });
  }

  createNewPassword(password: string, email: any, token: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, {
      email: email,
      token: token,
      password: password
    });
  }
}

