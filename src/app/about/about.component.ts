import { Component, OnInit } from '@angular/core';
import {Leader} from "../shared/leader";
import {DishService} from "../services/dish.service";
import {LeaderService} from "../services/leader.service";
import {expand, flyInOut} from "../animations/app.animation";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [flyInOut(), expand()]
})
export class AboutComponent implements OnInit {

  // @ts-ignore
  leaders: Leader[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders)
  }

}
