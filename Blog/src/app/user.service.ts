import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserService {


  url2: string;
  islogged: boolean;

  constructor(
    private httpClient: HttpClient,
    private router: Router) {

    this.url2 = 'https://reqres.in/api/login';

  }

  // promesa login
  getLogin(objeto) {

    if (objeto) {
      const logueado = 'activo';
      localStorage.setItem('logueado', logueado);
      this.islogged = true;

      this.router.navigate(['/posts']);

      return this.httpClient.post(this.url2, objeto).toPromise();
    }

  }
  logOutServicio() {
    this.islogged = false;
  }






}







