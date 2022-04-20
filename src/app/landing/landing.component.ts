import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  hideScrollbar: boolean = true;
  dataCards: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.dataCards = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/articles/cards-stats.json");
  }

}
