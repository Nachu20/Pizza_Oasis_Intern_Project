import { Component } from '@angular/core';
import { PIZZA } from './pizzaMenu';
import { Pizza } from './model';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './cart-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'Your Pizza App';
  pizzas!: Pizza[]; // Assuming you have a Pizza interface
  filteredPizzas: Pizza[] = [];
  searchQuery: string = '';
  constructor(private router: Router, private cartService: CartService, private route: ActivatedRoute) {}

  pizzaImages: string[] = [
    'https://img.freepik.com/free-photo/freshness-gourmet-homemade-pizza-generated-by-ai_188544-151679.jpg?size=626&ext=jpg&ga=GA1.1.147643265.1706623937&semt=sph',
    'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?size=626&ext=jpg&ga=GA1.1.147643265.1706623937&semt=sph',
  ];

  ngOnInit(): void {
    // Assign the list of pizzas to the 'pizzas' property
    this.pizzas = PIZZA; // Assuming you have a PIZZAS array
    
  }
 
  onAddToCartClick(pizza: Pizza): void {
    // Add pizza to the cart
    this.cartService.addToCart(pizza);
    this.router.navigate(['/cart']);
   
    
  }
  Order(){
    this.router.navigate(['/payment']);
  }
}
