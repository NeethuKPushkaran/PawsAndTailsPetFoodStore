import { Component } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart!: Cart;
  constructor(private cartService:CartService,
    private foodService:FoodService){

      // let foods = foodService.getAll();
      // cartService.addToCart(foods[1]);
      // cartService.addToCart(foods[2]);
      // cartService.addToCart(foods[3]);


    this.setCart();
   }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }  

  setCart(){
    this.cart = this.cartService.getCart();
  }
}
