import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { PetFoodPageComponent } from './pet-food-page/pet-food-page.component';
import { NoneFoundComponent } from './none-found/none-found.component';
import { TagsComponent } from './tags/tags.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LoginComponent,
    AllProductsComponent,
    CartComponent,
    SearchComponent,
    PetFoodPageComponent,
    NoneFoundComponent,
    TagsComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PagesModule { }
