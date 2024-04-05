import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { PetFoodPageComponent } from './pages/pet-food-page/pet-food-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'all-products', component: AllProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'food/:id', component: PetFoodPageComponent},
  {path: 'search/:searchTerm', component: AllProductsComponent},
  {path: 'tag/:tag', component: AllProductsComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'log-in', component: AllProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
