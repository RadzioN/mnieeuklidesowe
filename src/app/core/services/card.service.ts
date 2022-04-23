import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CardService {
    constructor(private http: HttpClient) { }

    initCardsData() {
        this.setCardsData();
    }

    getCardsData() {
        return JSON.parse(localStorage.getItem('cards-data')!);
    }

    private getJSON(): Observable<any> {
        return this.http.get("./assets/articles/cards-stats.json");
    }

    private setCardsData() {
        this.getJSON().subscribe(data => {
            localStorage.setItem('cards-data', JSON.stringify(data));
        });

    }
}