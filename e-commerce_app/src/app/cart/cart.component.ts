// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service.service';
import { Product } from '../product-page/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }
  
  removeFromCart(item: Product): void {
    this.cartService.removeFromCart(item);
  }

  calculateTotal():number{
    // Use the reduce function to sum up the prices of all items in the cart
    return this.cartItems.reduce((total, item) => total + item.price, 0);
 }
}

