// cart.component.ts

import { Component } from '@angular/core';
import { Pizza } from '../model';
import { Topping } from '../toppings/toppingsModel';
import { CartService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  selectedPizzas: Pizza[] = [];
  selectedToppings: Topping[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getSelectedPizzas().subscribe((pizzas) => {
      this.selectedPizzas = pizzas;
    });

    this.cartService.getSelectedToppings().subscribe((toppings) => {
      this.selectedToppings = toppings;
    });
  }

  removePizza(pizza: Pizza): void {
    this.cartService.removePizza(pizza);
  }

  removeTopping(topping: Topping): void {
    this.cartService.removeTopping(topping);
  }

  calculateTotal(): number {
    return this.selectedPizzas.reduce((total, pizza) => total + pizza.price, 0) +
      this.selectedToppings.reduce((total, topping) => total + topping.price, 0);
  }

  placeOrder(): void {
    if (this.selectedPizzas.length > 0 || this.selectedToppings.length > 0) {
      this.router.navigate(['/payment']);
    } else {
      alert('Cannot place an order with an empty cart.');
    }
  }
}
