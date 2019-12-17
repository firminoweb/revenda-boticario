import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { RevendedorService, AuthService, ToastService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private revendedorService: RevendedorService,
    private authService: AuthService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    // this.toastService.show('Cadastro realizado com sucesso!',
    // {
    //   classname: 'bg-success text-light',
    //   delay: 2000,
    //   autohide: true
    // });
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      senha: [null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])]
    });
  }

  // Um getter conveniente para abreviar a sintaxe na View ;D
  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.authService.login(this.f.email.value, this.f.senha.value)
    .pipe(first())
    .subscribe(data => {
      this.router.navigate(['/dashboard']);
    },
    error => {
      this.toastService.show(error,
      {
        classname: 'bg-danger text-light',
        delay: 5000,
        autohide: true
      });
    });
  }

}
