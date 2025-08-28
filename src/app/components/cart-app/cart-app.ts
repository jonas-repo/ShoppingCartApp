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

  //inject dependency
  constructor(private service: ShopCarService){

  }

  //interface from onInit to initialize with this data
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

  onAddCart(product: Product){
    //by immutability we updated the array of items to don't share on memory reference with the old object and prevent changes from other places thats why we used ... in both this.items and product
    this.items = [... this.items, 
      {product: {...product}, 
      quantity: 1}]
  }


}
