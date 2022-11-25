import { Injectable } from '@angular/core';
import {Dish} from "../shared/dish";
import {delay, firstValueFrom, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";

export const randomDelay = () => Math.random() * 200

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
  }

  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
  }

  getDishIds(): Observable<string[]>{
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
  }
}
