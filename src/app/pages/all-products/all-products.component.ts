import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  foods:Food[]=[];
  food!: Food;
  constructor(private foodService:FoodService,
    private route: ActivatedRoute,
    private cartService:CartService,
    private router:Router){}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.foods = this.foodService.getAll().filter(food =>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else if(params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = this.foodService.getAll();
    })

    
    
  }

  
}
