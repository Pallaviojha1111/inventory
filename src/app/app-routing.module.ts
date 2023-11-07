import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { AddProductComponent } from './add-product/add-product.component';
//import { ViewProductComponent } from './view-product/view-product.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { RegistraionComponent } from './registraion/registraion.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'view-item', component:ViewItemComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  {path:'registration',component:RegistraionComponent}// Default to login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
