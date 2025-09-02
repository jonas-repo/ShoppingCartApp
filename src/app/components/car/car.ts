import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'car',
  imports: [],
  templateUrl: './car.html',
  styleUrl: './car.css'
})
export class Car {
  @Input() items: CartItem[] = []; //inyect from parent

  @Input() total = 0

  @Output() idProductEventEmmiter = new EventEmitter();

  /**
   * Emits the ID of the product to be deleted from the cart.
   *
   * @param id - The unique identifier of the product to remove from the cart.
   */
  onDeleteCart(id: number) {
    this.idProductEventEmmiter.emit(id);
  }

}
