import { Component } from '@angular/core';
import { Topping } from './toppingsModel';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart-service.service';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.css']
})
export class ToppingsComponent {
  constructor(private router: Router, private cartService: CartService, private route: ActivatedRoute) {}
top:Topping[]=[
  { name: "Cheese", price: 1.5 },
  { name: "Pepperoni", price: 2.0 },
  { name: "Mushrooms", price: 1.0 },
  { name: "Onions", price: 0.75 },
  { name: "Green Peppers", price: 1.25 },
  { name: "Olives", price: 1.5 },
  { name: "Sausage", price: 2.25 },
];
onAddToCartClick(selectedTopping: Topping): void {
  this.cartService.addToCartTopping(selectedTopping);
  this.router.navigate(['/cart']);
}
}
