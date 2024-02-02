// cart-service.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from './model';
import { Topping } from './toppings/toppingsModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedPizzas: Pizza[] = [];
  private cartSubject = new BehaviorSubject<Pizza[]>([]);

  private selectedToppings: Topping[] = [];
  private cartSubject1 = new BehaviorSubject<Topping[]>([]);

  constructor() {}

  addToCart(pizza: Pizza): void {
    this.selectedPizzas.push(pizza);
    this.cartSubject.next(this.selectedPizzas);
  }

  removePizza(pizza: Pizza): void {
    const index = this.selectedPizzas.findIndex((selectedPizza) => selectedPizza.id === pizza.id);
    if (index !== -1) {
      this.selectedPizzas.splice(index, 1);
      this.cartSubject.next(this.selectedPizzas);
    }
  }

  addToCartTopping(topping: Topping): void {
    this.selectedToppings.push(topping);
    this.cartSubject1.next(this.selectedToppings);
  }

  removeTopping(topping: Topping): void {
    const index = this.selectedToppings.findIndex((selectedTopping) => selectedTopping.name === topping.name);
    if (index !== -1) {
      this.selectedToppings.splice(index, 1);
      this.cartSubject1.next(this.selectedToppings);
    }
  }

  getSelectedPizzas(): BehaviorSubject<Pizza[]> {
    return this.cartSubject;
  }

  getSelectedToppings(): BehaviorSubject<Topping[]> {
    return this.cartSubject1;
  }

  calculateTotal(): number {
    return this.selectedPizzas.reduce((total, pizza) => total + pizza.price, 0) +
      this.selectedToppings.reduce((total, topping) => total + topping.price, 0);
  }
}
