import { Injectable } from '@angular/core';
import {Promotion} from "../shared/promotion";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leader";
import {delay, firstValueFrom, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000))
  }

  getPromotion(id: string): Observable<Promotion> {
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000))
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000))
  }

}
