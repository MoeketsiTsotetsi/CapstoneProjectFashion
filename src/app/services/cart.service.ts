import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems = [];

  addToCart(addedItem: any) {
    // @ts-ignore
    this.cartItems.push(addedItem);
    this.saveToLocalStorage()
  }

  saveToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  loadCartItems() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}') ;
    return this.cartItems;
  }

  clearCartItems() {
    localStorage.removeItem('cartItems');
    if (!localStorage.getItem('cartItems')) {
      return true;
    }
    return false;
  }

}
