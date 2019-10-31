import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { LoginComponent } from './components/login/login.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';


@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    ProductsListComponent,
    DashboardComponent,
    CreateProductComponent,
    LoginComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
