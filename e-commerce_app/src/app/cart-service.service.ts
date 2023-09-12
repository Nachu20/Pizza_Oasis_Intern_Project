// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../app/product-page/model'; // Import the updated Product model.

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  constructor() {}

  addToCart(item: Product): void {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(item: Product): void {
    const index = this.cartItems.findIndex((product) => product.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next(this.cartItems);
    }
  }

  getCartItems(): BehaviorSubject<Product[]> {
    return this.cartSubject;
  }
}

