import { Component, OnInit } from '@angular/core';
import { CardService } from '../core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  hideScrollbar: boolean = true;
  dataCards: any;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.dataCards = this.cardService.getCardsData();
  }

}
