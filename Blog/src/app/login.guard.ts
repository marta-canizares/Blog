import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {

  }


  canActivate() {

    const estado = localStorage.getItem('logueado');
    if (estado !== 'activo') {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }


}


