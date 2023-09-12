import { Component, OnInit } from '@angular/core';
import { Product } from './model';
import { PRODUCTS } from './prod';
import { Router } from '@angular/router';
import { CartService } from '../cart-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products!: Product[];
  filteredProducts: Product[] = [];
  searchQuery: string = '';

  constructor(private router: Router , private cartService:CartService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Assign the list of products to the 'products' property
    this.products = PRODUCTS;
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
     // console.log("Hello");
      this.filterProducts();
      console.log("Hello");
    });
  }
  
  onCartButtonClick(item: Product): void {
    // Navigate to the cart page
    this.cartService.addToCart(item);
    this.router.navigate(['/cart']);
    
  }
  filterProducts(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredProducts = this.products;
      
    } else {
     
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()),

      );
     
    }
}
}
