import { Component, OnInit } from '@angular/core';
import { CardService } from '../core';
import { Card } from '../shared';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  hideScrollbar: boolean = true;
  dataCards!: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.dataCards = this.cardService.getCardsData();
  }

}
