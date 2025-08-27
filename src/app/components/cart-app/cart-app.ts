import { Component, OnInit } from '@angular/core';
import { ShopCarService } from '../../services/shop-car-service';
import { Product } from '../../models/product';
import { Catalog } from '../catalog/catalog';
import { CartItem } from '../../models/cartItem';
import { Car } from '../car/car';

@Component({
  selector: 'cart-app',
  imports: [Catalog, Car],
  templateUrl: './cart-app.html',
  styleUrl: './cart-app.css'
})
export class CartApp implements OnInit{

  products: Product[] = [];

  items: CartItem[] = [];

  //inyect dependency
  constructor(private service: ShopCarService){

  }

  //interface from onInit to initialize with this data
  ngOnInit(): void {
    this.products = this.service.findAll();
  }
}
