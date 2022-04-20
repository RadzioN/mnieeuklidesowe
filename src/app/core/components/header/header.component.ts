import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isDarkMode: boolean;
    @Input() articleCode: string = '';
    dataCards: any;

    constructor(private themeService: ThemeService, private http: HttpClient) {
        this.themeService.initTheme();
        this.isDarkMode = !this.themeService.isDarkMode();
    }

    ngOnInit() {
        this.getJSON().subscribe(data => {
            this.dataCards = data;
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/articles/cards-stats.json");
    }

    toggleDarkMode() {
        this.isDarkMode = this.themeService.isDarkMode();

        this.isDarkMode
            ? this.themeService.update('light-mode')
            : this.themeService.update('dark-mode');
    }

    getName() {
        return this.dataCards?.filter((m: { code: string; }) => m.code === this.articleCode)[0].name;
    }
}