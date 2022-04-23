import { Component, Input } from '@angular/core';
import { CardService } from '../../services';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    dataCards: any;
    @Input() articleCode: string = '';

    constructor(private cardService: CardService) { }

    ngOnInit() {
        this.dataCards = this.cardService.getCardsData();
    }

}