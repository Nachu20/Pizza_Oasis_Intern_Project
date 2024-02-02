import { Component } from '@angular/core';
import { Pizza } from './pmodel';
import { PizzaService } from '../pizza.service';
import { PIZZA } from '../pizzaMenu';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.loadPizzas();
  }
  loadPizzas(): void {
    this.pizzaService.getPizzas().subscribe((pizzas) => (this.pizzas = pizzas));
  }
  newPizza: Pizza = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  };

  addPizza(): void {
    this.newPizza.id = PIZZA.length + 1;

      // Use the PizzaService to add the new pizza
      this.pizzaService.addPizza(this.newPizza);
      console.log(this.newPizza);
      // Clear the form for the next pizza
      this.newPizza = {
        id: 0,
        name: '',
        description: '',
        price: 0,
        imageUrl: ''
      };  
  }
  
}
