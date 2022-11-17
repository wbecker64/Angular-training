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
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leaderService.getFeaturedLeader();
  }

}
