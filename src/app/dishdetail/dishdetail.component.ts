import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../shared/dish";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {


  @Input()
  // @ts-ignore
  dish: Dish;

  constructor() { }

  ngOnInit(): void {
  }

}
