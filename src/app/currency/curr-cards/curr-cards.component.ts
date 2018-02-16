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
  baseImageUrl = 'https://www.cryptocompare.com';

  constructor(private coinApiService: CoinApiService) { }

  ngOnInit() {
    this.coinApiService.getAllCoins().subscribe(
      resultArray => {
        let arr = [];
        let that = this;
        _.pickBy(resultArray.Data, function (value, key, object) {
          if (parseInt(value.SortOrder) <= 20) {
            that.coinApiService.getCoinPriceUSD(value.Name).subscribe(
              res => {
                value.Price = res.USD;
              });
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
