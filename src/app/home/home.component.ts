import {Component, Inject, OnInit} from '@angular/core';
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

  // @ts-ignore
  constructor(private dishservice: DishService, private promotionservice: PromotionService, private leaderService: LeaderService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish()
        .subscribe(dish => this.dish = dish)
    this.promotionservice.getFeaturedPromotion()
        .subscribe(promo => this.promotion = promo)
    this.leaderService.getFeaturedLeader()
        .subscribe(leader => this.leader = leader)
  }

}
