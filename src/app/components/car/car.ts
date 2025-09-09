import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'car',
  imports: [],
  templateUrl: './car.html',
  styleUrl: './car.css'
})
export class Car implements OnChanges{
  
  @Input() items: CartItem[] = []; //inyect from parent

  @Input() total = 0

  @Output() idProductEventEmmiter = new EventEmitter();


   ngOnChanges(changes: SimpleChanges): void {
    let itemsChanges = changes['items'];
    this.calculateTotal();
    this.saveSession();
  }

  /**
   * Emits the ID of the product to be deleted from the cart.
   *
   * @param id - The unique identifier of the product to remove from the cart.
   */
  onDeleteCart(id: number) {
    this.idProductEventEmmiter.emit(id);
  }

  /**
   * Calculates the total cost of all items in the cart.
   * 
   * Iterates over the `items` array, multiplying each item's quantity by its product price,
   * and sums the results to update the `total` property.
   *
   * @remarks
   * Assumes that each item in `items` has a `quantity` and a `product` with a `price` property.
   *
   * @returns {void}
   */
  calculateTotal(){
    this.total = this.items.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0);
  }

  /**
   * Saves the current cart items to the browser's session storage.
   *
   * Serializes the `items` array and stores it under the key `'cart'` in sessionStorage.
   * This allows the cart state to persist across page reloads within the same session.
   */
  saveSession(){
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  } 

}
