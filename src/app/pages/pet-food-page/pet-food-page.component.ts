import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-pet-food-page',
  templateUrl: './pet-food-page.component.html',
  styleUrls: ['./pet-food-page.component.css']
})
export class PetFoodPageComponent implements OnInit{
  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService:FoodService,
    private cartService:CartService,
    private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id'])
    })
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }

  ngOnInit(): void {
  
  }
}
