import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    constructor(private http: HttpClient) { }

    getArticleData(code: string) {
        return JSON.parse(localStorage.getItem(`${code}-article`)!);
    }

    private getJSON(code: string): Observable<any> {
        return this.http.get(`./assets/articles/${code}-article.json`);
    }

    setArticleData(code: string) {
        this.getJSON(code).subscribe(data => {
            localStorage.setItem(`${code}-article`, JSON.stringify(data));
        });
        return this.getJSON(code);
    }
}