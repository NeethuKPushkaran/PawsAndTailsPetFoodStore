import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { FooterComponent } from './general/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { PetFoodPageComponent } from './pages/pet-food-page/pet-food-page.component';
import { NoneFoundComponent } from './pages/none-found/none-found.component';
import { TagsComponent } from './pages/tags/tags.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    AllProductsComponent,
    CartComponent,
    LoginComponent,
    SearchComponent,
    PetFoodPageComponent,
    NoneFoundComponent,
    TagsComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
