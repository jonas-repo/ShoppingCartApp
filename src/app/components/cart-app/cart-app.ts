import { Component, OnInit } from '@angular/core';
import { ShopCarService } from '../../services/shop-car-service';
import { Product } from '../../models/product';
import { Catalog } from '../catalog/catalog';
import { CartItem } from '../../models/cartItem';
import { Navbar } from '../navbar/navbar';
import { CartModal } from '../cart-modal/cart-modal';

@Component({
  selector: 'cart-app',
  imports: [Catalog, CartModal, Navbar],
  templateUrl: './cart-app.html',
  styleUrl: './cart-app.css'
})
export class CartApp implements OnInit {

  products: Product[] = [];

  items: CartItem[] = [];

  total: number = 0;

  showCart: boolean = false;

  //inject dependency
  constructor(private service: ShopCarService) {

  }

  //interface from onInit to initialize with this data
  ngOnInit(): void {
    this.products = this.service.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    this.calculateTotal();
  }

  /**
   * Adds a product to the cart. If the product already exists in the cart, increments its quantity by 1.
   * Otherwise, adds the product to the cart with a quantity of 1.
   *
   * @param product - The product to add to the cart.
   */
  onAddCart(product: Product) {
    const hasItem = this.items.find(item => item.product.id === product.id);
    if (hasItem) {
      this.items = this.items.map(item => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item;
      })
    }
    else {
      //by immutability we updated the array of items to don't share on memory reference with the old object and prevent changes from other places thats why we used ... in both this.items and product
      this.items = [... this.items,
      {
        product: { ...product },
        quantity: 1
      }]
    }
    this.calculateTotal();
    this.saveSession();
  }

  /**
   * Removes an item from the cart based on the provided product ID.
   *
   * @param id - The unique identifier of the product to be removed from the cart.
   */
  onDeleteCart(id: number) {
    this.items = this.items.filter(item => item.product.id !== id);
    this.calculateTotal();
    this.saveSession
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

  openCart(){
    this.showCart = !this.showCart;
  }
}
