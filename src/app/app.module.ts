// Angular starting core modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';

// Services
import {
  ComprasService,
  RevendedorService,
  AuthService,
  CashbackService
} from './services';

// Fake backend
import {
  fakeBackendProvider,
  JwtInterceptor,
  ErrorInterceptor
} from './helpers';

// Environments and SW config
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Starting AppComponent and Routing
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// All components and widgets
import { ComponentsModule } from './components/components.module';

// Ng Bootstrap Components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, CadastroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ComprasService,
    RevendedorService,
    AuthService,
    CashbackService,
    { provide: LOCALE_ID, useValue: 'pt'},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
