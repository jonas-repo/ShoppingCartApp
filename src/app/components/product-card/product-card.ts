import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;

  @Output() productEventEmmiter: EventEmitter<Product> = new EventEmitter();

  onAddCart(product: Product){
    this.productEventEmmiter.emit(product); // Emit this event to parent Catalog when button is clicked
  }
}
