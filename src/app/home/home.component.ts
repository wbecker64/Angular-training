import { Component, OnInit } from '@angular/core';
import {Dish} from "../shared/dish";
import {Promotion} from "../shared/promotion";
import {DishService} from "../services/dish.service";
import {PromotionService} from "../services/promotion.service";
import {Leader} from "../shared/leader";
import {LeaderService} from "../services/leader.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  dish: Dish;
  // @ts-ignore
  promotion: Promotion;
  // @ts-ignore
  leader: Leader;

  constructor(private dishservice: DishService, private promotionservice: PromotionService, private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish()
        .then(dish => this.dish = dish)
        .catch(err => console.log(err))
    this.promotionservice.getFeaturedPromotion()
        .then(promo => this.promotion = promo)
        .catch(err => console.log(err))
    this.leaderService.getFeaturedLeader()
        .then(leader => this.leader = leader)
        .catch(err => console.log(err))
  }

}
