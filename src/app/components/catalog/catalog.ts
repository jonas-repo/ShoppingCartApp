import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'catalog',
  imports: [ProductCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
  @Input() products!: Product[];

  @Output() productEventEmmiter: EventEmitter<Product> = new EventEmitter();

  onAddCart(product : Product){
    this.productEventEmmiter.emit(product); // pass from the child product-card event to the parent cart-app
  }
}
