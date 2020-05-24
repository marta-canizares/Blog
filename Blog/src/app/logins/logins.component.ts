import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  formulario: FormGroup;

  constructor(private userService: UserService) {


    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
    });

  }


  ngOnInit(): void {


  }

  async recogerDatos() {
    await this.userService.getLogin(this.formulario.value);
  }


}
