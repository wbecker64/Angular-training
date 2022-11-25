import {Component, Inject, OnInit} from '@angular/core';
import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";
import {expand, flyInOut} from "../animations/app.animation";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [flyInOut(), expand()]
})
export class MenuComponent implements OnInit {

  // @ts-ignore
  dishes: Dish[]
  // @ts-ignore
  errMess: string

  // @ts-ignore
  constructor(private dishService: DishService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes, error => this.errMess = error)
  }

}
