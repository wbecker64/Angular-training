import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // @ts-ignore
  dish: Dish;

  constructor(private dishService: DishService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.dishService.getDish(id).subscribe(dish => this.dish = dish)
  }

  goBack(): void {
    this.location.back()
  }

}
