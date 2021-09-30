import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ArtinService } from '../shared/service/artin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  API_URL: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  errorMessage;
  isLoading : boolean = false;
  isNavbar: boolean = false;

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private service: ArtinService
  ) { }

  login(user) {
    this.service.login(user);
  }

  getAccessToken() {    
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['login']);
    }
  }
  
}
