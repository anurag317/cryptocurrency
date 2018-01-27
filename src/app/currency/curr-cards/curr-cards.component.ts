import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-curr-cards',
  templateUrl: './curr-cards.component.html',
  styleUrls: ['./curr-cards.component.scss']
})
export class CurrCardsComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://coinbin.org/lbc').subscribe( data => {
      console.log(data);
    });
  }

}
