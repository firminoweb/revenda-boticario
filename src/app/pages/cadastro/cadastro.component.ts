import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { RevendedorService, AuthService, ToastService } from '../../services';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {
  public revendedorForm: FormGroup;

  constructor(
    private revendedorService: RevendedorService,
    private authService: AuthService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.revendedorForm = this.formBuilder.group({
      nomecompleto: [null, Validators.compose([
        Validators.required
      ])],
      cpf: [null, Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ])],
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
    return this.revendedorForm.controls;
  }

  cadastrarrevendedor() {
    this.revendedorService.register(this.revendedorForm.value)
    .pipe(first())
    .subscribe(data => {
      this.toastService.show('Cadastro realizado com sucesso!',
      {
        classname: 'bg-success text-light',
        delay: 5000,
        autohide: true
      });

      this.router.navigate(['/login']);
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

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
