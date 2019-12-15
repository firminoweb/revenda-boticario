import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComprasComponent } from './cadastro-compras.component';

describe('CadastroComprasComponent', () => {
  let component: CadastroComprasComponent;
  let fixture: ComponentFixture<CadastroComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
