import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../car/car';
import { CartItem } from '../../models/cartItem';


@Component({
  selector: 'cart-modal',
  imports: [Car],
  templateUrl: './cart-modal.html',
  styleUrl: './cart-modal.css'
})
export class CartModal {

  @Input() items: CartItem[] = []; //inyect from parent

   @Output() idProductEventEmmiter = new EventEmitter();

     @Output() openCartEvent= new EventEmitter();

   onDeleteCart(id: number) {
    this.idProductEventEmmiter.emit(id);
  }

  openCart(){
    this.openCartEvent.emit();
  }
}
