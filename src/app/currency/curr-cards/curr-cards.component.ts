import { Component, OnInit } from '@angular/core';
import { CoinApiService } from './curr-cards.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-curr-cards',
  templateUrl: './curr-cards.component.html',
  styleUrls: ['./curr-cards.component.scss'],
  providers: [CoinApiService]
})
export class CurrCardsComponent implements OnInit {

  result = [];

  constructor(private coinApiService: CoinApiService) { }

  ngOnInit() {
    this.coinApiService.getAllCoins().subscribe(
      resultArray => {
        let arr = [];
        _.pickBy(resultArray.Data, function (value, key, object) {
          if (parseInt(value.SortOrder) <= 20) {
            arr.push(value);
          }
          return arr;
        });
        this.result = arr;
        console.log(this.result);
      },
      error => console.log("Error :: " + error)
    )
  }

}
