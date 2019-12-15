import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// All components and widgets
import { ComponentsModule } from '../../components/components.module';


// Component
import { DashboardComponent } from './dashboard.component';

// Router
import { DashboardRoutingModule } from './dashboard.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})

export class DashboardModule { }
