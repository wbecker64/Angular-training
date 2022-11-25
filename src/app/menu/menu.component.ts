import {Component, Inject, OnInit} from '@angular/core';
import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
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
