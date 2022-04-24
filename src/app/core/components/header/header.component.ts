import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpComponent } from 'src/app/shared';
import { CardService, ThemeService } from '../../services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isDarkMode: boolean;
    @Input() articleCode: string = '';
    @Output() openMenu = new EventEmitter();
    nameCard!: string;

    constructor(private cardService: CardService, private themeService: ThemeService, public dialog: MatDialog) {
        this.cardService.initCardsData();
        this.themeService.initTheme();
        this.isDarkMode = !this.themeService.isDarkMode();
    }

    ngOnChanges() {
        this.nameCard = this.cardService.getCardsData()?.filter((m: { code: string; }) => m.code === this.articleCode)[0]?.name;
    }

    toggleDarkMode() {
        this.isDarkMode = this.themeService.isDarkMode();

        this.isDarkMode
            ? this.themeService.update('light-mode')
            : this.themeService.update('dark-mode');
    }

    openHelpDialog() {
        const dialogRef = this.dialog.open(HelpComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}