import { NavbarComponent } from './components/navbar/navbar.component';
// Angular starting core modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';

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

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
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
  providers: [{ provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
