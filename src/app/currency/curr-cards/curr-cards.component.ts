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

  constructor(private coinApiService: CoinApiService) { }

  ngOnInit() {
    this.coinApiService.getAllCoins().subscribe(
      resultArray => {
        var filteredCoins = _.pickBy(resultArray.Data, function (value, key, object) {
          return parseInt(value.SortOrder) < 20;
        });
        console.log(filteredCoins);
      },
      error => console.log("Error :: " + error)
    )
  }

}
