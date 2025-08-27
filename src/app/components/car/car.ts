import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'car',
  imports: [],
  templateUrl: './car.html',
  styleUrl: './car.css'
})
export class Car {
  @Input() items: CartItem[] = []; //inyect from parent
}
