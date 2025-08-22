import { Component, OnInit } from '@angular/core';
import { ShopCarService } from '../../services/shop-car-service';
import { Product } from '../../models/product';

@Component({
  selector: 'cart-app',
  imports: [],
  templateUrl: './cart-app.html',
  styleUrl: './cart-app.css'
})
export class CartApp implements OnInit{

  products: Product[] = [];

  //inyect dependency
  constructor(private service: ShopCarService){

  }

  //interface from onInit to initialize with this data
  ngOnInit(): void {
    this.products = this.service.findAll();
  }
}
