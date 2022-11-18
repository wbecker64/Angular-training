import { Injectable } from '@angular/core';
import {Dish} from "../shared/dish";
import {DISHES} from "../shared/dishes";
import {delay, firstValueFrom, Observable, of} from "rxjs";

export const randomDelay = () => Math.random() * 2000

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(randomDelay()))
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(randomDelay()))
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(randomDelay()))
  }

  getDishIds(): Observable<string[]>{
    return of(DISHES.map(dish => dish.id))
  }
}
