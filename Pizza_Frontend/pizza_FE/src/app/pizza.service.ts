// pizza.service.ts

import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza } from './pizza-list/pmodel';
import { PIZZA } from './pizzaMenu';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private pizzas: Pizza[] = PIZZA;

  private pizzasSubject: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>(this.pizzas);

  
  getPizzas(): Observable<Pizza[]> {
    return this.pizzasSubject.asObservable();
  }


  addPizza(newPizza: Pizza): void {
    newPizza.id = this.generateNewId();
    this.pizzas.push(newPizza);
    this.pizzasSubject.next(this.pizzas);
    this.notifyPizzasChange();
  }

  updatePizza(updatedPizza: Pizza): void {
    const index = this.pizzas.findIndex(pizza => pizza.id === updatedPizza.id);
    if (index !== -1) {
      this.pizzas[index] = { ...this.pizzas[index], ...updatedPizza };
      this.notifyPizzasChange();
    }
  }

  updatePizzaMenu(): void {
    // Update the PIZZA array with the latest pizzas
    PIZZA.push(...this.pizzas);
  }

  deletePizza(id: number): void {
    const index = this.pizzas.findIndex(pizza => pizza.id === id);
    if (index !== -1) {
      this.pizzas.splice(index, 1);
      this.notifyPizzasChange();
    }
  }

  private generateNewId(): number {
    const existingIds = this.pizzas.map(pizza => pizza.id);
    const maxId = Math.max(...existingIds);
    return maxId + 1;
  }

  private notifyPizzasChange(): void {
    this.pizzasSubject.next([...this.pizzas]);
  }
}
