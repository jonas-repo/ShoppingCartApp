import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/product.data';

@Injectable({
  providedIn: 'root'
})
export class ShopCarService {
  findAll(): Product []{
    return products; //getting the data from product.data
  }
}
