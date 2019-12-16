import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComprasService } from '../../../services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-compras',
  templateUrl: './cadastro-compras.component.html',
  styleUrls: ['./cadastro-compras.component.scss']
})

export class CadastroComprasComponent implements OnInit {
  public cadastroForm: FormGroup;

  constructor(
    private comprasService: ComprasService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      codcompra: [null, Validators.compose([
        Validators.required
      ])],
      datacompra: [null, Validators.compose([
        Validators.required
      ])],
      valorcompra: [null, Validators.compose([
        Validators.required
      ])],
      desccompra: [null]
    });
  }

  cadastrarCompras() {
    const rnd = Math.ceil(Math.random() * 3) - 1;
    const status = ['Reprovado', 'Aprovado', 'Em Validação'];
    const data = this.cadastroForm.get('datacompra').value;
    // console.log(this.cadastroForm.get('datacompra').value);

    this.comprasService.inserirCompras({
      codigo: this.cadastroForm.get('codcompra').value,
      data: data.year + '-' + data.month + '-' + data.day,
      valor: this.cadastroForm.get('valorcompra').value,
      descricao: this.cadastroForm.get('desccompra').value,
      porcb: 3,
      status: status[rnd]
    }).then(() => {
      this.router.navigate(['/dashboard']);
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
