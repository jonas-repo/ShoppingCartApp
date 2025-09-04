import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
/**
 * Represents the navigation bar component for the shopping cart application.
 * 
 * @remarks
 * This component displays the navigation bar and provides an interface to open the cart.
 * 
 * @property {CartItem[]} items - The list of items currently in the cart.
 * @event openCartEvent - Emits when the cart should be opened.
 * 
 * @method openCart - Emits the `openCartEvent` to signal that the cart should be opened.
 */
export class Navbar {

  @Input() items: CartItem[] = [];

  @Output() openCartEvent= new EventEmitter();

  openCart(){
    this.openCartEvent.emit();
  }

}
