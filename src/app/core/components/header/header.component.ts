import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ThemeService } from '../../services';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isDarkMode: boolean;

    constructor(private themeService: ThemeService) {
        this.themeService.initTheme();
        this.isDarkMode = !this.themeService.isDarkMode();
    }

    toggleDarkMode() {
        this.isDarkMode = this.themeService.isDarkMode();

        this.isDarkMode
            ? this.themeService.update('light-mode')
            : this.themeService.update('dark-mode');
    }
}