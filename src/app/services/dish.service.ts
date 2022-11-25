import {Injectable} from '@angular/core';
import {Dish} from "../shared/dish";
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";
import {ProcessHTTPMsgService} from "./process-httpmsg.service";

export const randomDelay = () => Math.random() * 200

@Injectable({
    providedIn: 'root'
})
export class DishService {

    constructor(private http: HttpClient, private processHttpMsgService : ProcessHTTPMsgService) {
    }

    getDishes(): Observable<Dish[]> {
        return this.http.get<Dish[]>(baseURL + 'dishes').pipe(catchError(this.processHttpMsgService.handleError))
    }

    getDish(id: string): Observable<Dish> {
        return this.http.get<Dish>(baseURL + 'dishes/' + id).pipe(catchError(this.processHttpMsgService.handleError))
    }

    getFeaturedDish(): Observable<Dish> {
        return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0])).pipe(catchError(this.processHttpMsgService.handleError))
    }

    getDishIds(): Observable<string[]> {
        return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    }
}
